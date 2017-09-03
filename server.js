var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
        'article-one': {
            title: 'article-one| bhavik moradiya',
            heading:'article-one',
            date:' Aug 23,2017',
            content:`
                    <p>
                        hello! this is bhavik moradiya and this is my first webpage, if you have any suggestions, please share it with us for better experience.
                    </p>
                    <p>
                         this page deals explicitly with the innovative and creative ideas about how people look at things.
                    </p>`
        },
        'article-two': {
            title: 'article-two| bhavik moradiya',
            heading:'article-two',
            date:' Aug 25,2017',
            content:`
                    <p>
                        hello! this is bhavik moradiya and this is my second webpage, if you have any suggestions, please share it with us for better experience.
                    </p>
                    <p>
                         this page deals explicitly with the innovative and creative ideas about how people look at things.
                    </p>`
        },
        'article-three': {
            title: 'article-three| bhavik moradiya',
            heading:'article-three',
            date:' Aug 27,2017',
            content:`
                    <p>
                        hello! this is bhavik moradiya and this is my third webpage, if you have any suggestions, please share it with us for better experience.
                    </p>
                    <p>
                         this page deals explicitly with the innovative and creative ideas about how people look at things.
                    </p>`
        },
};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmltemplate =`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
            
        </head>
        <body>
            <div class="container">
              <div>
                 <a href="/">home</a>
              </div>
              <hr/>
              <h3>
                 ${heading}
              </h3>
              <div>
                ${date}
              </div>
              <div>
                 ${content}
              </div>
            </div>
        </body>
    </html>
    `;
    return htmltemplate;
}    

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleName', function (req, res) {
    //articleName -- article-one
    //articles[articleName] - {} content object for article one
    var articleName = req.parans.articleName;
    res.send(createTemplate(articles[articleName]));
});  

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
