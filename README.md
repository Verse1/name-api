# Description

This is a simple algorithm with using a REST API with a GET request on the root directory that takes in three parameters:

     name: The first parameter (string).
     age: The second parameter (num).
     gender: The third parameter (string M or F).

It uses all three parameters to create a unique analysis of a persons name by providing an insight to what a persons name could mean.

# Run

## CLI

You can either run the API locally using yarn or npm with the following commands:

```
yarn start
```

or

```
npm start
```

## Docker

You can also run the API locally using docker with the following commands:

```
docker build . -t name-api
docker run -p 3000:3000 -d name-api
```
