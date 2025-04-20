const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'TU-EMAIL-GMAIL@gmail.com',    // ⚠️ reemplaza claramente por tu Gmail real
    pass: 'zeyd rxqz vffv kwjj'          // ✅ contraseña específica (exacta, copiada arriba)
  }
});

exports.sendEmailOnNewUser = functions.auth.user().onCreate((user) => {
  const email = user.email;
  const displayName = user.displayName || 'Nuevo usuario';

  const mailOptions = {
    from: 'VokaFlow App <TU-EMAIL-GMAIL@gmail.com>', // ⚠️ usa claramente tu email real
    to: 'vokaflow@vokaflow.com',
    subject: '🚀 ¡Nuevo usuario registrado en VokaFlow!',
    html: `
      <h2>🎉 Nuevo usuario registrado:</h2>
      <p><strong>Nombre:</strong> ${displayName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
    `
  };

  return transporter.sendMail(mailOptions)
    .then(() => console.log('📧 Email enviado correctamente.'))
    .catch(error => console.error('❌ Error enviando email:', error));
});
