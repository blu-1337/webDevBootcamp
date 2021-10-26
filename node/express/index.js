const express = require('express');
const app = express();

app.get('/', (req, res) => { //the root route
  console.log('default request');
  res.send('this is the homepage');
})

app.get('/r/:subreddit', (req, res) => { //functionează pentru orice /r/cats /r/dogs etc. //we are just matching a pattern
  console.log(req.params); //show what value we paste in like 'cats' => {subreddit: 'cats'}
  const { subreddit } = req.params;
  res.send(`You are browsing the ${subreddit} subreddit!`)
})


app.get('/r/:subreddit/:postid', (req, res) => { //functionează pentru orice /r/cats /r/dogs etc. //we are just matching a pattern
  console.log(req.params); //show what value we paste in like 'cats' => {subreddit: 'cats'}
  const { subreddit, postid } = req.params;
  res.send(`You are browsing the ${subreddit} subreddit with post ID ${postid}!`)
})

app.get('/cats', (req, res) => {
  console.log('cat request');
  res.send('meow');
})

app.post('/cats', (req, res) => { //this is a post request, can be done with postman
  res.send('post request to /cats!;')
})

app.get('/dogs', (req, res) => {
  console.log('dog request');
  res.send('woof  ');
})

app.get('/search', (req, res) => {
  console.log(req.query); //you send the query request through postman
  const { q } = req.query; //we are waiting for a variable q when getting the query 
  if(!q){ //trimite un mesaj dacă intri în search și nu cauți nimic
    res.send('nothing found if nothing searched boss!') 
  }
  res.send(`<h1>Search results for ${q}</h1>`)

})

app.get('*', (req, res) => { //this is a generic response, if all other routings fail for example; it has to be put at the end! //terms are matched in order 
  res.send(`I don't know this path`)
})



app.listen(8080, () => {
  console.log("listening on port 8080...")
})

/*
''%%http://localhost:8080/search?q=searchedForTerm''%%
acel q se ia din ''%%const q''%%

you can add more key value pairs with ampersand like

''%%http://localhost:8080/search?q=searchTerm&color=green''%%
*/