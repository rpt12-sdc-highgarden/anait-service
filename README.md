# Reviews micro-service

> A service responsible for displaying/rendering a book reviews stored in a MongoDB.

## Related Projects

- < https://github.com/rpt12-sdc-highgarden/aarushi-service>
- < https://github.com/rpt12-sdc-highgarden/alyssa-service>
- < https://github.com/rpt12-sdc-highgarden/mike-service>

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [API Endpoints](#API%20Endpoints)
1. [Running the tests](#Running%20the%20tests)

## Usage

1- Install the dependencies.

```sh
npm install
```

2- run the seeding script tp feed the database with 10000 reviews documents.

```sh
npm run seed
```

3- transpile the components.

```sh
npm run build
```

4- then run the server.

```sh
npm start
```

5- go to `http://localhost:3003` & voilà...

## Requirements

- Node 8.11.4
- npm 5.6.0
- MongoDB

## API Endpoints

### `/reviews/:id`

- method: `GET`.
- description: retrieves the reviews associated to the book with the specified `id`.
- API response:
A JSON-encoded array of objects where each object represent a review.
A review object would look like this:

```js
{
  "_id": "5c99be23d83f3c5994dd1e38",
  "id": 20,
  "image_url": "http://lorempixel.com/640/480/people",
  "reviewer_name": "Rey Cummerata",
  "star_rate": 5,
  "review_date": "2019-03-06T09:58:19.247Z",
  "review_description": "Incidunt suscipit corrupti fugit earum saepe ipsum et veritatis earum. Eius voluptatem sint perspiciatis accusamus porro deleniti aut et debitis. Iste vitae ut voluptatum dicta consequatur exercitationem dolore sed. Veritatis est et. Illo iure voluptatem voluptatem aperiam possimus. Consequatur fugiat sapiente nostrum aut quisquam magni quaerat non in.\n \rConsectetur qui adipisci. Totam qui voluptas. Aperiam minima est earum quae est labore sit.\n \rOmnis esse hic iure. Vitae qui qui amet sed asperiores repellat porro quidem soluta. Quo officia voluptatem mollitia aspernatur possimus quia. Dolore porro fugiat.",
  "likes_count": 995
},
```

### `/review`

- method: `PATCH`.
- description: updates the `likes_count` for the specified review depending on the current state of the button (being like or unlike).
- API response:
A JSON-encoded **updated** review object with the new `likes_count`


### `/newreview`

- method: `POST`.
- description: adds new review.
- API response: status code 200, 'Successfully saved'.


### `/deletereview/:id`

- method: `DELETE`.
- description: deletes selected review.
- API response: status code 200, `DeletedReview`.



## Running the tests

Before running the tests using the `npm test` script, you have to prepare the environment as such:

1. `import` `react` & `styled-components` in the `Reviews.jsx` & `Review.jsx` files.
1. `import` `react` & `react-dom` in the `index.jsx` file.
1. Replace the fetch requests urls to the `localhost` instead on port `3003`(in the `Reviews.jsx` & `Review.jsx` files.)
