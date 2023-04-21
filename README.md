
# Project-4-Resilience

![front page](screenshot goes here)


## Route Table


|       **URL**           | **REST Route** | **HTTP Verb** | **CRUD Action** |   **EJS View(s)**         | **Created Yet?**  |
| ---------------         | -------------- | ------------- | --------------- | ------------------------  | ----------------- |
| /                       | N/A            | GET           | read            | homepage.jsx              | YES               |
| /workout/:id            | show           | GET           | read            | detailspage.jsx           | YES               |
| /search                 | show           | GET           | update          | searchpage.jsx            | NO                |
| /workout/comment/:id    | add            | PUT           | create          | detailspage               | NO                |
| /workout/comment/:id    | edit           | GET           | update          | detailspage.jsx           | NO                |
| /workout/comment/:id    | destroy	       | DELETE	       | delete		       | detailspage               | NO                |


## Installation Instructions
If you would like to run this app locally, please follow these steps:
- Fork and clone this reository
- Initialize NPM
- install node.js, express.js, mongoose and configure .json package
- creat .env and use PORT = 3000
- 'npm run backend' to start backend; 'npm run frontend' to start frontend


## Technologies Used:
### Languages: 
- React/Vite
- JavaScript
- Express
- Node.js
- HTML
- CSS
- Bulma

### Workflow/ Project Management:
- Trello
- Figma
- Github
- Visual Studio Code Live Share
- Heroku


## Launch the App!
- [Click to Checkout Resilience!](App link goes here)




