const faker = require('faker');
const moment = require('moment');
const { review } = require('./models.js');


//async function
async function seeding() {
  try { 
    var fakeData = [];
    //add 1M records
    var startTime = new Date();

    for (let i = 0; i < 10000000; i += 1) { 
      var document = {
        id: Math.floor(Math.random() * 100),
        image_url: 'https://pixel.nymag.com/imgs/daily/vulture/2017/03/30/30-chandler-bing.w330.h330.jpg',
        reviewer_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        star_rate: Math.floor(Math.random() * 6),
        review_date: moment(faker.date.past()).format('MMM DD, YY'),
        review_description: faker.lorem.paragraphs(),
        likes_count: Math.floor(Math.random() * 1000),
      };
      if ( i % 50000 === 0) {
        console.log('Data ----->', i)
      }
      fakeData.push(document);
      // if statement if loop is reaching 10k then  i % 10k === 0
      if (i % 250000 === 0) {
      // await insert many
        let insert = await review.insertMany(fakeData)
        console.log('data is successfully seeded!');
      } 
     
      fakeData = [];
    }
    console.log('seeding finised');
   const elapsed = new Date() - startTime;
   var resultInMinutes = (elapsed / 60000).toFixed(2);
   console.log('total time: ', resultInMinutes);

  } catch (error) {
    console.log('Error', error);
  }
}

 seeding();

