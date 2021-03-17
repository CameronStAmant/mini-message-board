var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hellow world',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Mini Message Board', message: messages });
});

router.get('/new', function (req, res) {
  res.render('form', { title: 'Create a new post' });
});

router.post('/new', function (req, res) {
  console.log(req.body);
  console.log(req.body.author);
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
