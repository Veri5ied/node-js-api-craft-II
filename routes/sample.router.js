const express = require("express");
const sampleController = require("../controllers/sample.controller");
const router = express.Router();

router.route("/").get().post(sampleController.getMany);

router
  .route("/:id")
  .get(sampleController.getOne)
  .put(sampleController.updateOne)
  .delete(sampleController.deleteOne);

module.exports = router;
