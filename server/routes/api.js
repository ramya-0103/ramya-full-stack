const express = require("express");
const { saveSearchValue } = require("../controllers/searchValueController");
const { saveArticleData } = require("../controllers/articleDataController");

const router = express.Router();

// Route for saving search value
router.post("/searchValue", saveSearchValue);

// Route for saving clicked article data
router.post("/clickedArticle", saveArticleData);

module.exports = router;
