## Code base structure

Within /doc there are various documentations provided each sprint

Within /src is the source code for the client and the server.
The client code is implemented with Node.js using the Angular 12 framework.
The server code is implemented with Node.js using the Express.js framework.

Within /src/client is a README.md that describes installation and setup process.
Within /src/server is a README.md that describes installation and setup process.

## Server architecture
Within index.js (the entry point of the application), the express server is setup on port 5000. The MongoDB is also setup at port 27017. The server receives http requests with body's encoded as JSON's.

Index.js uses routes for http requests in the routes directory.


## Client architecture
Within the angular project, the root of the html is found in app.component.html, and other important pages to note are the login page and landing page. These other pages use the RoutingModule by Angular, to route to a different page.

Within the /app folder in the client source code is where most of the code is written.
Within app there are directories for Angular Material components, our custom components, and services.


