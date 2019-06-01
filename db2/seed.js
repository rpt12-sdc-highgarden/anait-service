const faker = require('faker');
const moment = require('moment');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


const million = (async () => {
  const tenMil = 10000000;

  const csvWriter = createCsvWriter({
    path: './file.csv',
    header: [
      {id: 'id', title: 'id'},
      {id: 'image_url', title: 'image_url'},
      {id: 'reviewer_name', title: 'reviewer_name'},
      {id: 'star_rate', title: 'star_rate'},
      {id: 'review_date', title: 'review_date'},
      {id: 'review_description', title: 'review_description'},
      {id: 'likes_count', title: 'likes_count'},    
    ]
  });

  const data = [];
  csvWriter.writeRecords([])
  
  for (let i = 1; i < tenMil + 1; i++) {
    if (data.length > 99 || i === tenMil) {
      await csvWriter.writeRecords(data);
      data.length = 0;
      console.log("loaded 100")
  }
  console.log('After for loop', i)
    data.push({
      id: i,
      image_url: 'https://pixel.nymag.com/imgs/daily/vulture/2017/03/30/30-chandler-bing.w330.h330.jpg',
      reviewer_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      star_rate: Math.floor(Math.random() * 6),
      review_date: moment(faker.date.past()).format('YYYY-MM-DD'),
      review_description: `${faker.lorem.paragraph()}`,
      likes_count: Math.floor(Math.random() * 1000),
    });
  }
  
})();