# Simple School Admin

This is a lightweight, clean and customized javascript admin dashboard that uses KeystoneJs like CMS to manage data for a small LMS FrontEnd App. The Simple School BackEnd was created with a modern structure rather of proposed by Keystone boilerplate. It uses ES6 with babel transpilation, gulp for build and bundle. You can find either, some customizations that drive new developments of a backend to any small LMS website.

## Getting Started

Here you can get instructions about get the code to development, testing or deploying on your production environment.
If you need more details please contact me.

### Prerequisites ###

Make sure that you have the following:
* [NodeJs](https://nodejs.org/en/), the runtime.
* [MongoDb](https://www.mongodb.com/download-center), the database used by Keystone to persist data. Proceed with the installation of MongoDb and make it run. You can do this more easily using a docker container.

### Installing ###

Then, follow these steps:

1) Clone the repository

```
git clone https://github.com/leomfelicissimo/simple-school-backend.git
```

2) With, node installed, access application directory and get dependencies installed:
```
cd simple-school-backend
npm install
```

3) Create a .env file with the content:
```
COOKIE_SECRET=YouNeedToUseABigRandomStringHere
MONGO_URL=Here you must to set the MongoDb URL
```

4) Now, just start the app!

```
npm start
```

## Adittional Info ##

This project uses KeystoneJs. The KeystoneJs is a CMS that implements security, database access, API exposing and other features to any FrontEnd project. Keystone works internally creating dynamic routing with express, and documents, collections to models of any application on MongoDb. The Keystone's admin is created with React being easy to customize and extend if needed.

## Author ##
* **Leonardo Felicissimo**


## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
