const express = require('express');
const app = express();
const path = require('path'); //to change our path
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, '/public')))

// console.log(redditData); //to see if it works

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); //aici concatenăm directorul curent ca să puteme da nodemon index.js de oriunde ne-am afla - evident cu /foldername/index.js specificat complet

app.get('/', (req, res) => {
  console.log('hello');
  res.render('home') //it looks by default in views/ and expects a .ejs file, you can ommit writing .ejs; wherever it sees javascript in html it will parse it :)
})

app.get('/cats', (req, res) => {
  const cats = [
    'Blu', 'Foxy', 'Latina', 'Beta', 'Dragonsita'
  ]
  res.render('cats', {cats})
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  // console.log(data);
  if (data){
    res.render('subreddit', { ...data }); //spread the data to access individual properties
  }  else {
    res.render('notfound', {subreddit}) //give error if you do not give chickens, soccer or mightyharves subreddits.
  }

})

app.get('/random', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render('random', { num }); //this will give num to the variable rand to the random.ejs file; you can also write just num without the rand
}
)

app.listen(3000, () => {
  console.log("Listening on port 3000")
})