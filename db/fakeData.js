const faker = require('faker');
const moment = require('moment');
const { review } = require('./models.js');


//async function
async function seeding() {
  try { 
    var fakeData = [];
    //add 1M records
    var startTime = new Date();

    var tenMillion = 10000000;
    for (let i = 1; i < tenMillion +1; i += 1) { 
      var document = {
        // id: Math.floor(Math.random() * 100),  //change it to not random
        id: i,
        image_url: 'https://pixel.nymag.com/imgs/daily/vulture/2017/03/30/30-chandler-bing.w330.h330.jpg',
        reviewer_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        star_rate: Math.floor(Math.random() * 6),
        review_date: moment(faker.date.past()).format('MMM DD, YY'),
        review_description: faker.lorem.paragraphs(),
        likes_count: Math.floor(Math.random() * 1000),
      };
      if ( i % 100000 === 0) {
        console.log('Data ----->', i)
      }
      fakeData.push(document);
      // if statement if loop is reaching 10k then  i % 10k === 0
      // for (let i = 1; i < tenMil + 1; i++) {
      //   if (data.length > 99 || i === tenMil)
      // if (i % 25 === 0) { 
      if (fakeData.length > 99 || i === tenMillion) {
        // await insert many
        var insert = await review.insertMany(fakeData)
        fakeData = [];
      // console.log('data is successfully seeded!');
      }
    } 
  } catch (error) {
    console.log('Error', error);
  }
  console.log('seeding finised');
  const elapsed = new Date() - startTime;
  var resultInMinutes = (elapsed / 60000).toFixed(2);
  console.log('total time: ', resultInMinutes);
} 
 
seeding();

