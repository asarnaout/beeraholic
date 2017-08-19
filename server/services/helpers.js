const cryptoJs = require("crypto-js");
const SHA256 = require("crypto-js/sha256");

const helpers = {
	hashData: (data) => {
		return SHA256(data).toString();
	}
};

module.exports = helpers;