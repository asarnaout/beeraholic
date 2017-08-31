const cryptoJs = require("crypto-js");
const SHA256 = require("crypto-js/sha256");

const helpers = {
	hashData: (data) => {
		return SHA256(data).toString();
	},
	generateGuid: () => {
		let S4 = function() {
		   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		};
		return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
	},
    sendContactUsRequest: async (mailer, config, details) => {
        mailer.sendMail(config.contactUsMail, "Contact Us", `<html><h3>New Contact Us Request By: ${details.name}</h3><br/><div><h4>Content: </h4><p>${details.message}</p></div><br/><div><h4>Email Address: </h4><p>${details.emailAddress}</p></div></html>`)
    }
};

module.exports = helpers;