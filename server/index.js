/* eslint-disable import/no-extraneous-dependencies */
require('newrelic');

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { review } = require('../db/models.js');

const port = process.env.PORT || 3003;
console.log(port);
const app = express();
app.listen(port, () => console.log(`listening on port ${port}`));

app.use('/', express.static(`${__dirname}/../public`));
app.use('/:id', express.static(`${__dirname}/../public`));
app.use(morgan('dev'));
app.use(cors());

app.get('/reviews/:id', (req, res) => {
  review.find({ id: req.params.id }).exec()
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/newreview', urlencodedParser, (req, res) => {
  let newReview = new review(req.body);
  newReview.save((err) => {
    if (err) res.status(400).send(err);
    res.status(200).send('Successfully saved');
  });
});

app.delete('/deletereview/:id', (req, res) => {
  review.findOneAndDelete({ id: req.params.id }).exec()
    .then((deletedReview) => {
      res.send(deletedReview);
    })
    .catch((err) => {
      console.log(err);
    });
});

const jsonParser = bodyParser.json();
app.patch('/review', jsonParser, (req, res) => {
  let newLikesCount;
  if (req.body.likedStatus === 'like') {
    newLikesCount = req.body.likesCount + 1;
  } else {
    newLikesCount = req.body.likesCount - 1;
  }

  review.findOneAndUpdate(
    { _id: req.body.reviewId },
    { likes_count: newLikesCount },
    {
      useFindAndModify: false,
      new: true,
    },
  ).exec()
    .then((updatedReview) => {
      res.send(updatedReview);
    })
    .catch((err) => {
      console.log(err);
      res.send('Something went wrong!...');
    });
});
