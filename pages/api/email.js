const nodemailer = require('nodemailer')
export default function sendEmail(req, res) {

    let transporter = nodemailer.createTransport({
        host: 'smtp.jupiter.com.br',
        port: 25,
        auth: {
            user:'rafael@jupiter.com.br',
           
        },
        tls: {
            rejectUnauthorized: false
        }
    })

   

    transporter.sendMail({
        from: `VIACHAT <${req.body.email}>`, // sender address
        to: "rafael@jupiter.com.br", // list of receivers
        replyTo: req.body.email,
        subject: "CONTATO VIACHAT", // Subject line
        text: req.body.assunto, // plain text body
        html: `<b>${req.body.nome}</b><br />${req.body.assunto}`, // html body
      }).then((response) => {
            res.send(response)
      })
      .catch(e => {
        res.send(e)
      })
}