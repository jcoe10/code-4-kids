const router = require("express").Router();
const kidsController = require("../../controllers/kids-controller");
const bcrypt = require("bcrypt");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const mongo = require("connect-mongo");
const router = require("express").Router();

router.use(function(req, res){
  res.sendFile(path.join(__dirname,"client/index.html")); 

});
// Matches with "/api/books"
router.route("/")
  .get(kidsController.findAll);
//   .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;