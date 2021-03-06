const html = require('es6-string-html-template').html
const raw = require('es6-string-html-template').raw

const styles = raw(`
  <style>
    p { margin: 0; }
  </style>
`)

module.exports = ({
  userName,
  validateUrl
}) => html`
  ${styles}
  <p>Hola ${userName}.</p>
  <p>Por favor <a href="${raw(validateUrl)}">entra acá</a> para validar tu cuenta de correo.</p>
  <p>Podrás informarte y comentar todos los proyectos del presupuesto participativo de Vicente López.</p>
  <br />
  <p>Muchas gracias,</p>
  <br />
  <p>PRESUPUESTO PARTICIPATIVO DE VICENTE LOPEZ</p>
  <br />
  <p>PD: si no te diste de alta en forosvecinales.org podés ignorar este correo.</p>
`.toString()
