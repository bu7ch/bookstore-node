const express = require('express');
const app = express();

const mongoose = require('mongoose');
const port = 8000;
let controller = require('./app/routes/bookRoutes')

// config database
const uri = "mongodb://localhost/grenoblebooksdb"
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`[Mongo connected !!]`))
  .catch(err => {
    console.log(Error, err.message);
  })


app.use(express.static(__dirname + '/public'));
app.set('view engine', "pug");
app.set("views", "./app/views");
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/', (req, res) => {
  res.render("test",{message: " Welcome to our bookstore"});
})
app.route('/books')
  .get(controller.getBooks)
  .post(controller.postBook)

app.route('/books/:id')
  .get(controller.getBook)
  .put(controller.updateBook)
  .delete(controller.deleteBook)


app.listen(port, ()=>{
  console.log(`[ 💥 Server is running on port ${port}]`);
  
})