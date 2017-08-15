'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const url = require('url');
const app = express();
const StoryblokClient = require('storyblok-node-client');

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  partialsDir: 'views/components/'
}));

app.set('view engine', '.hbs');
app.set('views', 'views');

let Storyblok = new StoryblokClient({
  privateToken: 'a6yDcOOh8puW4Y8YIa7Q7Qtt'
});

// 3. Define a wilcard route to get the story mathing the url path
app.get('/*', function(req, res) {
  var path = url.parse(req.url).pathname;
  path = path == '/' ? 'home' : path; // this will allow to visit "home" from / only but still allow the editor to access the home "page" on localhost:4300/home

  Storyblok
    .get(`stories/${path}`, { // dynamic variable also here!
      version: req.query._storyblok ? 'draft': 'published'
    })
    .then((response) => {
      res.render('root', { // changed to root because the default root component we created and you can ned is called "root"! Have a look in your components overview: http://app.storyblok.com/#!/me/spaces/40936/components/ 
        story: response.body.story
      });
    })
    .catch((error) => {
      res.send(error);
    });
});



app.use('/public', express.static('public'));

app.listen(4300, function() {
  console.log('Example app listening on port 4300!');
});
