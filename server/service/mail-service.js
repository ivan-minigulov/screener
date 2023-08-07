const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активация аккаунта на сайте ' + process.env.CLIENT_URL,
            text: '',
            html:
                `
                    <div>
                        <h2>Для активации аккаунта перейдите по ссылке</h2>
                        <a href="${link}">${link}</a>
                    </div>
                `
        })
    }

    async sendLinkUpdatePassword(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Восстановление пароля на сайте ' + process.env.CLIENT_URL,
            text: '',
            html:
                `
                    <div>
                        <h2>Для восстановления пароля перейдите по ссылке</h2>
                        <a href="${link}">${link}</a>
                    </div>
                `
        })
    }
}

module.exports = new MailService();