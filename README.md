# GoBrawl - Brawl Stars tracking and analytics

GoBrawl is a prototype project to track and analyze players on Supercell's game Brawl Stars. Using the Brawl Stars API with a GraphQL interface on the backend, stored using MongoDB for long term analytics.
<br/>
<br/>
This project is meant to provide a more conclusive history of players' game record to provide better analytics than what is currently available. I intent to keep working on the backend for the majority of this project, and eventually provide a front-end and full user experience if the project works as I hope it will.
<br/>
<br/>
Unfortunatly due to time contraints this may take a long time, and due to how fast mobile games like this move, I may be too late when I am finished. However I hope in the mean time I can create something to push my skills in web development, and most importantly with this project, web deployment and operations.

## Tech Stack

* NodeJS
* Apollo Server
* Express
* GraphQL
* Mongoose
* MongoDB

## Setup

Install
<br/>
`npm install`
<br/>
Enviroment Variables
<br/>
```
PORT = 4000
API_TOKEN = "Brawl Stars API token"
DB_URL = "MongoDB Database url" # Not currently in use
```
<br/>
Start
<br/>

`npm start` or `node src/index.js`
