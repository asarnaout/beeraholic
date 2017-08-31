const nodemailer = require('nodemailer');

class Mailer {	
	constructor(config) {
		this.config = config;
		this.transporter = nodemailer.createTransport({
			service: config.mailerServer,
			auth: {
				user: config.mailerAddress,
				pass: config.mailerPassword
			}
		});
	}

	sendMail(receiver, subject, content) {	
		let mailOptions = {
			from: this.config.mailerAddress,
			to: receiver,
			subject: subject,
			html: content
		};
			
		this.transporter.sendMail(mailOptions);
	}
}

module.exports = Mailer;