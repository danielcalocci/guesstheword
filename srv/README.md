## Background

This project aims to deliver a rest API that has an endpoint to sync contacts from **MockAPI** to **Mailchimp**

## Video Introduction
### https://www.youtube.com/watch?v=KWsJIXtmWBs

## Heroku deploy
### https://mailshimpsync.herokuapp.com/

## Technical Approach

### Stack

- **NodeJs** with **Express** as the backend rest framework

### Libraries and Dependencies

- **axios** 
	- To easy handle http requests
- **@mailchimp/mailchimp_marketing**
	- MailShimp library to easy manage lists and members 

	> My first attempt was writing the http requests from scratch as I had
	> tested in Postman, but then I realized that Mailshimp has an official
	> NodeJs library so I decide to used it.

- **dotenv**
	- To load local .env files

### Dev Dependencies

- **Typescript**
	- I decide to use Typescript to improve the **quality and security** of the source code during development  
- **Eslint** 
	- To use the same code pattern in the entire project and prevent some errors during development

### Endpoints
- **GET /contacts/sync**
	- Send the contacts from MockAPI  to MailShimp
	- **Endpoint flow**

    ![alt text](https://github.com/danielcalocci/mailshimpsync/blob/main/flow.png?raw=true)

## Main Files
|File            |Description                    |
|----------------|-------------------------------|
|`src/server.ts`|`Root file that instanciate and configure the express application`|
|`src/config/config.ts`|`Build the configuration object from environment variables`|
|`src/routes/index.ts`|`Setup the routes for the endpoints`|
|`src/controllers/sync/index.ts`|`Controller called by /contacts/sync endpoint`|
|`src/controllers/home/index.ts`|`Controller to show index.html when user get / path`|
|`src/assets/mailChimp.ts`|`Class to handle MailShimp actions`|
|`src/assets/mockApi.ts`|`Class to handle MockApi actions`|
|`src/postbuild.js`|`It helps Heroku deploy the application, copying the .html file after tsc build the app`|


## Deploying the app
### Heroku
    - This github repo is configured on the Heroku, and each new commit to the main branch will start the deploy automatically
### Local
    ```
    npm install
    npm run start:prod
    ```
