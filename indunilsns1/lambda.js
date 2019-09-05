let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.listSubscriptionsByTopic({
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:testsnsindunil'
    }).promise()
        .then(data => {
            console.log("dataaaa");
            console.log(data);
            // your code goes here
        })
        .catch(err => {
            console.log("errorr");
            console.log(err);
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}