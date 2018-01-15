const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/homepage');
const ctrlWorks = require('../controllers/works');
const ctrlAbout = require('../controllers/about');
const ctrlBlog = require('../controllers/blog');

/* GET home page. */
router.get('/', ctrlHome.getIndex);
router.post('/contact', ctrlHome.sendEmail);
router.get('/works', ctrlWorks.getWorksPage);
router.get('/about', ctrlAbout.getAboutPage);
router.get('/blog', ctrlBlog.getBlogPage);

module.exports = router;
