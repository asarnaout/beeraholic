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
	}
};

module.exports = helpers;