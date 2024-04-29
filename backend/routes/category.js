const express = require("express");
const router = express.Router();

const {
  newCategory,
  getCategory,
  deleteCategory,
} = require("../controllers/category");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/admin/category/new").post(newCategory);
router.route("/category").get(getCategory);
router.route("/admin/category/:genreID").delete(deleteCategory);

module.exports = router;
