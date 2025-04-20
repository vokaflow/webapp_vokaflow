
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

// Inicializar Firebase Admin con credenciales por defecto
admin.initializeApp();

// Configuración del transporte de correo con las credenciales proporcionadas
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'vokaflow@vokaflow.com',
    pass: 'zeyd rxqz vffv kwjj'
  }
});

// Función para validar el email
const isValidEmail = (email) => {
  return /^\S+@\S+\.\S+$/.test(email);
};

// Función que envía email al registrarse un nuevo usuario
exports.sendEmailOnNewUser = functions.auth.user().onCreate(async (user) => {
  try {
    // Validaciones básicas
    if (!user || !user.email) {
      console.error('❌ Datos de usuario inválidos:', user);
      return null;
    }

    if (!isValidEmail(user.email)) {
      console.error('❌ Email inválido:', user.email);
      return null;
    }

    const email = user.email;
    const displayName = user.displayName || 'Nuevo usuario';
    const timestamp = new Date().toLocaleString('es-ES', {
      timeZone: 'Europe/Madrid'
    });

    // Plantilla de correo mejorada
    const mailOptions = {
      from: {
        name: 'VokaFlow App',
        address: 'vokaflow@vokaflow.com'
      },
      to: 'vokaflow@vokaflow.com',
      subject: '🚀 ¡Nuevo usuario registrado en VokaFlow!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(45deg, #0078FF, #D8409F); padding: 20px; color: white; border-radius: 10px; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 10px; margin-top: 20px; }
              .footer { text-align: center; margin-top: 20px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎉 ¡Nuevo Usuario Registrado!</h1>
              </div>
              <div class="content">
                <h2>Detalles del registro:</h2>
                <p><strong>👤 Nombre:</strong> ${displayName}</p>
                <p><strong>📧 Email:</strong> ${email}</p>
                <p><strong>🕒 Fecha:</strong> ${timestamp}</p>
                <p><strong>📱 Dispositivo:</strong> ${user.metadata?.lastSignInDevice || 'No disponible'}</p>
                <p><strong>🌐 Proveedor:</strong> ${user.providerData[0]?.providerId || 'Email/Password'}</p>
              </div>
              <div class="footer">
                <p>Este es un mensaje automático de VokaFlow</p>
                <p>© ${new Date().getFullYear()} VokaFlow. Todos los derechos reservados.</p>
              </div>
            </div>
          </body>
        </html>
      `
    };

    // Enviar el correo
    const result = await transporter.sendMail(mailOptions);
    console.log('📧 Email enviado correctamente:', result.messageId);
    
    // Crear documento del usuario en Firestore
    await admin.firestore().collection('users').doc(user.uid).set({
      email: user.email,
      nombre: user.displayName || 'Nuevo usuario',
      fecha_registro: admin.firestore.FieldValue.serverTimestamp(),
      provider: user.providerData[0]?.providerId || 'email',
      ultimo_acceso: admin.firestore.FieldValue.serverTimestamp(),
      notificaciones_email: true
    }, { merge: true });

    return null;

  } catch (error) {
    console.error('❌ Error en sendEmailOnNewUser:', error);
    return null;
  }
});

// Función para actualizar último acceso
exports.updateLastAccess = functions.https.onCall(async (data, context) => {
  try {
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'Usuario no autenticado');
    }

    const uid = context.auth.uid;
    await admin.firestore().collection('users').doc(uid).update({
      ultimo_acceso: admin.firestore.FieldValue.serverTimestamp()
    });

    return { success: true };
  } catch (error) {
    console.error('❌ Error actualizando último acceso:', error);
    throw new functions.https.HttpsError('internal', 'Error interno del servidor');
  }
});

// Función para manejar errores de autenticación
exports.handleAuthError = functions.https.onCall(async (data, context) => {
  try {
    const { error, userId } = data;
    
    if (!error || !userId) {
      throw new functions.https.HttpsError('invalid-argument', 'Datos inválidos');
    }

    await admin.firestore().collection('auth_errors').add({
      userId,
      error: error.code,
      message: error.message,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });

    return { logged: true };
  } catch (error) {
    console.error('❌ Error registrando error de autenticación:', error);
    throw new functions.https.HttpsError('internal', 'Error interno del servidor');
  }
});
