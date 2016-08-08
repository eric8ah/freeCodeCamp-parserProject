var express = require('express');
var app = express();
var acceptLanguage = require('accept-language');
acceptLanguage.languages(['en-US']);
var useragent = require('useragent');


app.get('/', function(req, res) {
    var ipAddress = req.headers['x-forwarded-for'];
    console.log(ipAddress);
    var language = acceptLanguage.get(req.headers['accept-language']);
    console.log(language);
    var agent = useragent.parse(req.headers['user-agent']);
    var operatingSystem = agent.os.toString();
    console.log(agent.os.toString());
    var response = {
        "ipaddress": ipAddress,
        "language": language,
        "Operating System": operatingSystem
    };
    res.json(response);
});


app.listen(process.env.PORT || 8080, function () {
  console.log('Server has been started');
});

