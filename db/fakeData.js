const faker = require('faker');
const moment = require('moment');
const { review } = require('./models.js');

const fakeData = [];

for (let i = 0; i < 10000; i += 1) {
  const document = {
    id: Math.floor(Math.random() * 100),
    image_url: 'https://pixel.nymag.com/imgs/daily/vulture/2017/03/30/30-chandler-bing.w330.h330.jpg',
    reviewer_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    star_rate: Math.floor(Math.random() * 6),
    review_date: moment(faker.date.past()).format('MMM DD, YY'),
    review_description: faker.lorem.paragraphs(),
    likes_count: Math.floor(Math.random() * 1000),
  };

  fakeData.push(document);
}


// Adds New Rview, it is not used. Created to check using Postman
const addNewReview = () => {
  const newReview = {}
  newReview.id = Math.floor(Math.random() * 1000),
  newReview.image_url = 'https://pixel.nymag.com/imgs/daily/vulture/2017/03/30/30-chandler-bing.w330.h330.jpg',
  newReview.reviewer_name =`${faker.name.firstName()} ${faker.name.lastName()}`,
  newReview.star_rate = Math.floor(Math.random() * 6),
  newReview.review_date = moment(faker.date.past()).format('MMM DD, YY'),
  newReview.review_description = faker.lorem.paragraphs(),
  newReview.likes_count = Math.floor(Math.random() * 1000),

};

review.insertMany(fakeData)
  .then(() => {
    console.log('data is successfully seeded!');
  });
