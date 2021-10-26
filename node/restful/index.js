const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')

const { v4: uuid } = require('uuid');
uuid(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.use(express.urlencoded({ extended: true })) //use this middleware to parse url body as url encoded data
app.use(express.json()); //parses incoming requests with JSON payloads
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

let comments = [
  {
    id: uuid(), //folosim uuid pentru a genera un id unic
    username: 'Todd',
    comment: 'lol that is so funny!'
  },
  {
    id: uuid(),
    username: 'sickkunt',
    comment: 'that is sickkkk bro'
  },
  {
    id: uuid(),
    username: 'sisterina',
    comment: 'call me sen̈orita mamasita lovesita'
  },
]

// console.log(comments[1]);
// console.log(comments[1].id);

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
  res.render('comments/new');
})

app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() })
  // res.send('IT WORKED!'); //this can cause data to be re-enteres when clicking refresh, instead of this we will use a redirect
  res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/show', { comment });
})

app.get('/comments/:id/edit', (req, res) => {
  const {id} = req.params;
  const comment = comments.find( c=> c.id === id);
  res.render('comments/edit', {comment})
})

app.patch('/comments/:id', (req,res) => {
  // res.send("ALL GOOD")
  // const comment = comments.find(c=> c.id === id);
  const {id} = req.params;
  const newCommentText = req.body.comment; //body este din postman> Body > x-www-form-urlencoded unde se pun key-value pairs aici comment și comentariul
  const foundComment = comments.find (c=> c.id === id);
  foundComment.comment = newCommentText;
  res.redirect('/comments')
})


app.delete('/comments/:id', (req,res) => {
  const {id} = req.params;
  comments = comments.filter(c=>c.id !==id);
  res.redirect('/comments');

})



app.get('/tacos', (req, res) => {
  res.send('GET /tacos response')
})


app.post('/tacos', (req, res) => {
  console.log(req.body);
  const { meat, qty } = req.body;
  // res.send('POST /tacos response');
  res.send(`OK, here are your ${qty} ${meat} tacos!`);
})

app.listen(3000, () => {
  console.log("on port 3000")
})



