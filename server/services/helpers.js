const cryptoJs = require("crypto-js");
const SHA256 = require("crypto-js/sha256");
const config = require('../config.js');
const mailer = new (require('./mailer'))(config);

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
    sendContactUsRequest: async (details) => {
        mailer.sendMail(config.contactUsMail, "Contact Us", `<html><h3>New Contact Us Request By: ${details.name}</h3><br/><div><h4>Content: </h4><p>${details.message}</p></div><br/><div><h4>Email Address: </h4><p>${details.emailAddress}</p></div></html>`)
	},
    sendSignUpConfirmationMail: async (details) => {
        mailer.sendMail(config.contactUsMail, "Welcome To Beeraholic", `<html><h3 style='color:#1180ff'>Dear ${details.firstName},</h3><br/><div><span style='font-size:16px;font-weight:bold'>You have been registered successfully to Beeraholic! Beeraholic is your personal assistant for finding your favorite beer. Use Beeraholic to search and bookmark our huge collection of beers.</span></div><br/><div><span style='font-size:16px;font-weight:bold'>Please note that by using Beeraholic you hereby confirm that you are above 18 years of age.</span></div><br/><div><span style='font-size:16px;font-weight:bold'>Sincerely,</span></div><div><span style='font-size:16px;font-weight:bold'>Beeraholic Team</span></div></html>`)
    }
};

module.exports = helpers;