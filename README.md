# Recent Wins   [![Build Status](https://travis-ci.org/jwelmac/recent-wins.svg?branch=master)](https://travis-ci.org/jwelmac/recent-wins)     
Simple API to demonstrate [Koa2](https://github.com/koajs/koa/).  
Currently returns json data of my recent accomplishments.

## To Run:
- Clone the repository.
- Run `npm install`
- When all dependencies are installed run `npm start`
- Send a `GET` request to `localhost:4000` in your browser to retrieve all information in JSON format

## Endpoints
- `/` : Redirects to `all`
- `/all` : Displays all [categories](https://github.com/jwelmac/recent-wins/blob/master/data/categories.json) and their information
- `/categories/:category` : Returns the information for a specific category

## Testing 
To test run `npm test`. This project uses [ava](https://github.com/avajs/ava) as the testing suite with the help of [supertest](https://github.com/visionmedia/supertest).

## Categories
- [about-me](https://github.com/jwelmac/recent-wins/blob/master/data/info/about-me.md): Personal developer summary
- [experience](https://github.com/jwelmac/recent-wins/blob/master/data/info/experience.md): Recent work experiences
- [open-source](https://github.com/jwelmac/recent-wins/blob/master/data/info/open-source.md): Open source contributions I have made
- [side-projects](https://github.com/jwelmac/recent-wins/blob/master/data/info/side-projects.md): A few of my recent side projects

## TO DO
- Write a REACT(-bootstrap) frontend to display the information
- Add some more experiences :-)
