var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/*
Here we are configuring our SMTP Server details.
STMP is mail server which is responsible for sending and recieving email.
*/
nodemailer.SMTP = {
	//host: "smtp.unipattern.com",
	//port: "25",
	host: "smtp.gmail.com",
	port: "465",
	ssl: true,
	user: "account@gmail.com",
	pass: "mypassword",
	use_authentication: true
}

var transporter = nodemailer.createTransport();
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/
router.post('/postEmail/', function(req, res) {
	console.log("body");
	console.log(req.body);
	var mailOptions = {
		from : req.body.mailto,
		to : "account@gmail.com",
		subject : req.body.subject,
		html : "寄件者email：" + req.body.mailto+"<BR/>" + 
			   "訊息內容：" + req.body.content
	}
	console.log("option");
	console.log(mailOptions);

	transporter.sendMail(mailOptions, function(error, response) {
		if (error) {
			console.log(error);
			res.end("error");
		} else {
			console.log("Message sent: " + response.message);
			res.end("sent");
		}
	});
});
module.exports = router;
