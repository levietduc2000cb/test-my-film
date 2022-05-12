const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const MyListFilm = require("../models/MyListFilm");

//@route GET api/mylistfilm
//@decscrition Get my list film
//@access Private
router.get("/", verifyToken, async (req, res) => {
  try {
    const mylistfilm = await MyListFilm.find({ user: req.userId }).populate(
      "user",
      ["username"]
    );
    res.json({ success: true, mylistfilm });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//@route POST api/mylistfilm
//@decscrition Create my list film
//@access Private
router.post("/", verifyToken, async (req, res) => {
  const { title, description, ulrFilm, urlImg, status } = req.body;

  //Simple validation
  if (!title) {
    return res
      .status(400)
      .json({ success: false, message: "Title is required" });
  }

  try {
    const newFilm = new MyListFilm({
      title,
      description,
      ulrFilm,
      urlImg,
      status: status || "CHƯA XEM",
      user: req.userId,
    });
    await newFilm.save();
    res.json({
      success: true,
      message: "Thêm vào danh sách yêu thích thành công",
      film: newFilm,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server có lỗi" });
  }
});

//@route PUT api/mylistfilm
//@decscrition Update my list film
//@access Private

router.put("/:id", verifyToken, async (req, res) => {
  const { title, description, ulrFilm, urlImg, status } = req.body;

  if (!title) {
    return res
      .status(400)
      .json({ success: false, message: "Title is required" });
  }

  try {
    let updatedFilm = {
      title,
      description,
      ulrFilm,
      urlImg,
      status: status || "CHƯA XEM",
    };
    const myListFilmUpdateCondition = { _id: req.params.id, user: req.userId };
    updatedFilm = await MyListFilm.findOneAndUpdate(
      myListFilmUpdateCondition,
      updatedFilm,
      { new: true }
    );

    //user not authorised to update film or film not found
    if (!updatedFilm) {
      return res.status(401).json({
        success: false,
        message: "Film not found or user not authorised",
      });
    }
    res.json({
      success: true,
      message: "Excellent progress!",
      updatedFilm: updatedFilm,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//@route DELETE api/mylistfilm
//@decscrition delete my list film
//@access Private

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const filmDeleteCondition = { _id: req.params.id, user: req.userId };
    const deletedFilm = await MyListFilm.findOneAndDelete(filmDeleteCondition);

    //User not authorised or film not found
    if (!deletedFilm) {
      return res.status(401).json({
        success: false,
        message: "Film not found or user not authorised",
      });
    }
    res.json({
      success: true,
      deletefilm: deletedFilm,
      message: "Xóa phim thành công",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
