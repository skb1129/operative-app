# Operative App

Operative App is a anonymous chatting application built using React and Firebase.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See the `deployment` branch for instructions on how to deploy.

### Prerequisites

You need `node` and `npm` installed on your system to run the application.

You need to have a **Firebase** project set up online and make sure it has a `messages` object already. The rules should be as follows:
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

### Installing

Install `yarn` using `npm`:

```
npm i -g yarn
```
Add your **Firebase** project `config` to `src/components/Interface.js` file.

Change to the project directory and run the following command to run the application:

```shell
yarn
yarn start
```

Now open `localhost:3000` on your browser to see the application in action.

## Built With

-   [React](https://reactjs.org/) \- Library for the front-end, base of this application
    
-   [Yarn](https://yarnpkg.com/lang/en/) \- Dependency Management
    
-   [Firebase](https://firebase.google.com/) \- Data Storage
    

## Authors

**Surya Kant Bansal**  
skb1129@yahoo.com
