# Angular 14 + Node.js + MongoDB Application
## A full-stack Angular Node.js MongoDB Application (MEAN stack)

###### Node.js Express exports REST APIs & interacts with MongoDB Database using Mongoose ODM.
- configuration file exports configuring parameters for MongoDB connection & Mongoose.
- Express web server in server.js where we configure CORS, initialize & run Express REST APIs.
- Next, we add configuration for MongoDB database in models/index.js, create Mongoose data model in models/user.model.js.
- Created User Controller.
- Defined routes for handle all CRUD operations user.routes.js

###### Angular 14 Client sends HTTP Requests and retrieves HTTP Responses using HTTPClient, consume data on the components. Angular Router is used for navigating to pages.
- The App component is a container with router-outlet. It has bar that links to routes paths via routerLink.
- UsersList component gets and displays users.
- UsersDetails component has a form for editing a user’s details based on :id.
- AddUser component has a form for adding a new user.
- These Components call UserService methods which use Angular HTTPClient to make HTTP requests and receive responses.
