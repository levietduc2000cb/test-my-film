const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MyListFilm = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  ulrFilm: {
    type: String,
  },
  urlImg: {
    type: String,
  },
  status: {
    type: String,
    enum: ["CHƯA XEM", "ĐANG XEM", "ĐÃ XEM"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});
module.exports = mongoose.model("myListFilm", MyListFilm);
