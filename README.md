# post21plus

post21plus is simple app that allow register/authtenticate an user to create/delete/list posts.

It is built with React for client side and nodeJs to server side

# Installation 

For simplicity I added the client side code at Client folder and made a build compilation to serve static files for server. So you can see the compiled code at Build folder.

To install, you only need clone this repo and at the top level directory run this code

```sh
$ npm install
```

then, you must run the command to start the server
```sh
$ npm start
```

NOTE: Due to the authentication to some functionalites is made with the token stored in cookies, you cannot use those functionalities from localHost.

With this installation your are installing just the server side, if you want to install the client side, you must move to Client folder and run:

```sh
$ npm install
```

NOTE2: You cannot execute upload images because that service require secret keys for s3 bucket, so in conclussion to be able to test completly the app I recommend you go to the deployed version.

https://post21plus.herokuapp.com/


# API Routes
They are the API routes used:
| Route | Method | Attributes | Description
| ------ | ------|---- |-----
| 'api/auth' | POST | email: string - password: string | This route is in charge to validate if the user is registrated
| 'api/user' | POST | email: string - password: string - name:string | This route creates the user in the DB
| 'api/user/post' | POST | email: string - image: string - title: string -content: string | This route creates a post in the DB and it is portected, so the user must be logged to request it
| '/post/:id/:page' | GET | id: string - page: string | This route lists the post associated to an user with the id of the user and the page to make the correct pagination
| '/user/:ownerId/post/:id' | DELETE | ownerId: string - id: string | This route delete a post associated to an user (ownerId) with their id (id)


