//require the Twilio module and create a REST client
var client = require('twilio')('ACda8bbf4ae8fd511bed176a858b761515', '6e9f4b7c549fa80ff6cf8bd5a965384e');

//Send an SMS text message
client.sendMessage({

    to:'+14053121309', // Any number Twilio can deliver to
    from: '+14058980805', // A number you bought from Twilio and can use for outbound communication
    body: 'Holly! Gaucamole.' // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio
    console.log(err);

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    }
});
