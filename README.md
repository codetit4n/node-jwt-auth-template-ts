# JWT authentication template for Node Backend - TypeScript edition


Basic template you can use in your projects for JWT authentication. It is built using Node.js, Express.js and MongoDB. It has amazing Type Security which is possible because of TypeScript.

## Routes:

#### /api/user/register  - POST
Creates a new user. It takes name, email and password in the request body and stores the name, email and *hashed password* in the Mongo database.

#### /api/user/login  - POST
Logs in the registered user and sends a new signed JWT. This JWT can be stored in local storage, etc.

#### /api/protected  - GET
Simple protected route, just for testing the JWT. You will need a valid JWT to access this route. Put the JWT in the header like: Authorization: 'Bearer [JWT]'

## How to use this template:

1. Clone the repo using:
```bash
git clone https://github.com/codeTIT4N/node-jwt-auth-template-ts
```
2. Rename .env.example to .env

3. Update the .env file with project secrets like:
    - JWT_SECRET: Encryption key to sign your JWTs. You can get one from: https://www.allkeysgenerator.com
    - JWT_LIFETIME: How much time a particular JWT will be valid for. Example: 30d - for 30 days.
    - MONGO_URI: Sign up for a free mongoDB account, if you don't have any. Create a new cluster and connect it using this URI. Refer: https://www.mongodb.com/docs/manual/reference/connection-string
    - PORT: This is optional. By default the port will be 3000.

4. Go inside the project and run the following commands:
```bash
npm install
npm run build
npm start
```
5. Edit the src/routes/protected.ts file for the protected routes according to your project's needs. One example is provided in this file.

6. Edit the src/controllers/protected.ts file for the controllers that will be executed after JWT validation. One example is provided in this file.

7. To compile TypeScript code to JavaScript and see the changes in real time, in a different terminal instance, run:
```bash
tsc -w
```