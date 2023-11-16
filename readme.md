# Set up

## Nodejs

npm install

npm start

## Browser

open browser to http://localhost:4567/fuzzy/public/


## Mongo Altas

a) Mongo Altas -> Create Search index on fuzzy->person
fuzzy_person_searchindex

b) Mongo Compass -> Aggregate on AML

Stage 1: $search
{
  index: "fuzzy_person_searchindex",
  text: {
    query: "erica",
    path: "primary_name",
    fuzzy:{}
  },
}

Stage 2: $limit
{
    $limit: 5000
}

Stage 3: $project

{
  _id: 0,
  primary_name: 1,
  type: 1,
  score: {
    $meta: "searchScore",
  }
}

## Test API [GET]
*   curl localhost:4567/fuzzy/api/v1

## Person Ping API [GET]
*   curl localhost:4567/fuzzy/api/v1/person/ping

## Person Search API [POST]
*  curl -H "content-type:application/json" -XPOST -d "{\"name\": \"erica\"}" localhost:4567/fuzzy/api/v1/person/search