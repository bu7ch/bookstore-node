const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  titre: {type: String},
  auteur: {type: String},
  date_publication: {type: Number},
  pages: {type: Number, min:1}
})


 const Book = mongoose.model('Book', BookSchema)

 module.exports = Book;