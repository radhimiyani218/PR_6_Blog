# 1.Clone the project
Clone the project from github

```bash
git clone 
```


## 2.Open the terminal and move into server folder

change the working directory and move into the server folder

```bash
cd server
```


## 3.Install the node modules using npm

```bash
npm install
```

## 4.Third party services used in application

- we are using following 3rd party services for ou application :-

    1. AWS S3 bucket to store image and video
        - we need bucket name, region, acess key, secret key and access url to upload or aceess image and video from S3 bucket. 
    2. AWS SES for sending emails 
        - we SES access key, access secret and region name to send emails.

- all the mention key are requied in .env file so we need to place it in .env.


## 5.Add .env file inside main folder

=> configure the following keys inside the .env file :-

```bash

#  =================================== BASIC =================================== 
HOSTNAME=
USERS=
PASSWORD=
PORT=
DATABASE=
BASE_URL=

#  =================================== AWS Auth =================================== 
AWS_S3_ACCESSKEYID=
AWS_S3_SECRETKEY=
AWS_S3_REGION=
AWS_S3_BUCKET=

#  =================================== Mail Auth =================================== 
EMAIL_HOST=
EMAIL_PORT=
EMAIL_AUTH_USER=
EMAIL_AUTH_PASS=

#  =================================== SES Auth =================================== 
AWS_SES_REGION=
AWS_SES_FROM_EMAIL=

# BACKEND URL
BACKEND_URL=

```

## 6. setup mysql database 

## 7.Start server in developement mode

```bash
npm run serve
```

## 8.Start server in production mode

```bash
npm start
```
