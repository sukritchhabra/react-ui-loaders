var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.use((req, res) => {
    console.log('\n~~~~~~~~~~ New URL Request ~~~~~~~~~~')
    let requestURL = req.url;
    console.log("\t Requested URL:", requestURL);

    if (requestURL.indexOf('.') >= 0) {
        if (requestURL.indexOf('dist') >= 0) {
            let pathInDist = requestURL.split('dist')[1];
            console.log(`\t Sending file: ${__dirname}/dist${pathInDist}`);
            res.sendFile(`${__dirname}/dist${pathInDist}`);
        }
    } else {
        console.log(`\t Sending file: ${__dirname}/index.html`);
        res.sendFile(`${__dirname}/index.html`);
    }
    console.log('\n');
});

app.listen(process.env.PORT || 8080);