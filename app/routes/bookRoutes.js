const mongoose = require('mongoose');
let Book = require('../models/book')


getBooks = (req,res) => {
  Book.find({}, (err, books) => {
    if (err) throw err;
    res.render("books",{books: books});
  })
}

postBook = (req,res) => {
  let newBook = new Book(req.body);
  newBook.save((err, book) => {
    if (err) throw err;
    res.json({mesage:"Book successfully added !", book});
  })
}
getBook = (req, res) => {
  Book.findById(req.params.id, (err, book)=> {
    if (err) throw err;
    res.json(book);
  });
}
deleteBook = (req,res) => {
  Book.remove({_id: req.params.id}, (err) => {
    res.json({message:"Book successfully deleted"});
  })
}

updateBook = (req,res) => {
  Book.findById({_id: req.params.id}, (err, book) => {
    if (err) throw err;
    Object.assign(book, req.body).save((err, ubook) => {
      if (err) throw err;
      res.json({message: "Book updated", ubook});
    })
  })
}

module.exports = { getBooks, postBook, getBook, deleteBook, updateBook}