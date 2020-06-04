const mongoose = require('mongoose');
let Book = require('../models/book')


getBooks = (req,res) => {
  Book.find({}, (err, books) => {
    if (err) throw err;
    res.render("books",{books: books});
  })
}
formBook = (req, res) => {
  res.render("_form")
}

postBook = (req,res) => {
  let newBook = new Book(req.body);
  newBook.save((err, book) => {
    if (err) throw err;
    res.redirect("/books")
  })
}
getBook = (req, res) => {
  Book.findById(req.params.id, (err, book)=> {
    if (err) throw err;
    res.render("book",{book:book});
  });
}
deleteBook = (req,res) => {
  Book.remove({_id: req.params.id}, (err) => {
    res.redirect("/books")
  })
}
editBook = (req,res) => {
  Book.findById({_id: req.params.id}, (err,book)=> {
    if(err) throw err;
    res.render("_edit",{book:book})
  })
}
updateBook = (req,res) => {
  Book.findById({_id: req.params.id}, (err, book) => {
    if (err) throw err;
    Object.assign(book, req.body).save((err, ubook) => {
      if (err) throw err;
      res.redirect("/books")
    })
  })
}

module.exports = { getBooks, postBook, getBook, deleteBook,editBook, updateBook, formBook}