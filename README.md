# Waiter Availability Web Application

## Contents:

* Project Overview

* Getting started on the API

* Creating you development environment

* Setting up the API

* Running the app locally

* Version control

* Issues

--------

## -Project Overview:

This is an application intended for use as waiter schedule. This application allows waiters to:

* Input their names directly into the URL which will then take in the name and greet the waiter

* If the waiter is already part of the database, the waiter will be greeted and the das which they have already selected to work on will be displayed to them

* If the waiter does not already exist in the database, the waiter will then be added and able to select days on which they would prefer to work

The application also allows the admin to:

* View all the waiters that work on particular days

* Reset the schedule for a new week

## -Creating your development environment:

To create the perfect development environment it is assumed that you already have the following dependencies installed:

* Node JS

* npm

* Nodemon (optional)

* A text editor of your choice that supports NodeJS

**NodeJS**

Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

**npm**

npm , short for Node Package Manager, is two things: first and foremost, it is an online repository for the publishing of open-source Node.js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management.

**Nodemon**

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using npm. Just use nodemon instead of node to run your code, and now your process will automatically restart when your code changes.


## -Getting started on the application:

To get started on editing and contributing to the Waiter Web Application you will need to clone the application repository from [GITHUB](https://github.com/misssrakiep/waiter)

### -Cloning the repository:

To clone the repository, copy and paste the following code into your terminal:

`$ git clone git@github.com:misssrakiep/waiter.git`

## -Setting up the application:

Change directories into the project folder. To install all the dependencies type or copy and paste `$ npm install` into our terminal.

```
"dependencies": {
  "body-parser": "^1.18.1",
  "express": "^4.15.4",
  "mongodb": "^2.2.31",
  "mongoose": "^4.11.11",
  "node-static": "^0.7.9"
}
```

Alternatively you could install the packages separately:


* [ExpressJS](https://expressjs.com/), a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

  `$ npm install express --save`

* [Mongo DB](https://www.mongodb.com/) ,a free and open-source cross-platform document-oriented database program.

  `$ npm install mongodb --save`

* [Mongoose](http://mongoosejs.com/),a straight-forward, schema-based solution to model your application data.

  `$ npm install mongoose --save`

* [Body-parser](https://www.npmjs.com/package/body-parser), extracts the entire body portion of an incoming request stream and exposes it on req.body .

  `$ npm install body-parser --save`

* [Node-static](https://www.npmjs.com/package/node-static), understands and supports conditional GET and HEAD requests.

  `$ npm install node-static --save`

## -Running the application locally:

To run the app on your local machine, type `$ nodemon` into your terminal. If, however, you do not have [Nodemon]() installed, type `$ node index.js`. If the app successfully starts up on your machine, you should see the following in your terminal:

## -Version control:

[Git](https://en.wikipedia.org/wiki/Git) is used for version control in this application.

## -Known issues:

Known issues with this web application are that the names are not removed from the database when the admin clicks reset. This button only clears the names from the current screen.
