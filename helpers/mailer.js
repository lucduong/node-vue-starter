const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const configs = () => {
  return {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // TLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  }
}

const transporter = () => {
  return nodemailer.createTransport(smtpTransport(configs()))
}

/**
 * Send email function using SMTP
 * 
 * @param {string} to 
 * @param {string} subject 
 * @param {string} html 
 * @param {string} text 
 * @return {Promise}
 */
const send = (to, subject, html, text) => {
  const c = configs()
  let mail = {
    from: c.auth.user,
    to,
    subject,
  }
  if (html) {
    mail.html = html
  }
  if (text) {
    mail.text = text
  }
  const t = transporter()
  return t.sendMail(mail)
    .then(response => {
      t.close()
      return response
    })
}

module.exports = {
  send,
}
