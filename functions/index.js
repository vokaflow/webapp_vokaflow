const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'davaks.dw@gmail.com',
    pass: 'zeyd rxqz vffv kwjj'
  }
});

const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

exports.sendEmailOnNewUser = functions.auth.user().onCreate(async (user) => {
  try {
    if (!user?.email || !isValidEmail(user.email)) {
      console.error('❌ Datos de usuario inválidos o email incorrecto:', user);
      return null;
    }

    const email = user.email;
    const displayName = user.displayName || 'Nuevo usuario';
    const timestamp = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });

    const mailOptions = {
      from: { name: 'VokaFlow App', address: 'davaks.dw@gmail.com' },
      to: 'vokaflow@vokaflow.com',
      subject: '🚀 ¡Nuevo usuario registrado en VokaFlow!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset=\"utf-8\">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(45deg, #0078FF, #D8409F); padding: 20px; color: white; border-radius: 10px; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 10px; margin-top: 20px; }
              .footer { text-align: center; margin-top: 20px; color: #666; }
            </style>
          </head>
          <body>
            <div class=\"container\">
              <div class=\"header\">
                <h1>🎉 ¡Nuevo Usuario Registrado!</h1>
              </div>
              <div class=\"content\">
                <h2>Detalles del registro:</h2>
                <p><strong>👤 Nombre:</strong> ${displayName}</p>
                <p><strong>📧 Email:</strong> ${email}</p>
                <p><strong>🕒 Fecha:</strong> ${timestamp}</p>
                <p><strong>🌐 Proveedor:</strong> ${user.providerData[0]?.providerId || 'Email/Password'}</p>
              </div>
              <div class=\"footer\">
                <p>Este es un mensaje automático de VokaFlow</p>
                <p>© ${new Date().getFullYear()} VokaFlow. Todos los derechos reservados.</p>
              </div>
            </div>
          </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('📧 Email enviado correctamente a:', email);

    await admin.firestore().collection('users').doc(user.uid).set({
      email,
      nombre: displayName,
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

exports.updateLastAccess = functions.https.onCall(async (data, context) => {
  try {
    if (!context.auth) throw new functions.https.HttpsError('unauthenticated', 'Usuario no autenticado');

    await admin.firestore().collection('users').doc(context.auth.uid).update({
      ultimo_acceso: admin.firestore.FieldValue.serverTimestamp()
    });

    return { success: true };
  } catch (error) {
    console.error('❌ Error actualizando último acceso:', error);
    throw new functions.https.HttpsError('internal', 'Error interno del servidor');
  }
});

exports.handleAuthError = functions.https.onCall(async (data, context) => {
  try {
    const { error, userId } = data;
    if (!error || !userId) throw new functions.https.HttpsError('invalid-argument', 'Datos inválidos');

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

