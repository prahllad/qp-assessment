# qp-assessment
 install package:- npm i <br />
 run server:- npm run dev <br />
 .env need to created in local:- <br />
 # PORT = 4000 <br />
# MONGO_URI = '' <br />
# To build Docker :- <br />
 in root ->  docker build -t grossery-booking-app  <br />
 in root -> docker run --env-file .env -p 3000:3000 grossery-booking-app <br />

 we can access [api in ](http://localhost:3000/admin)  to test if server is up inside docker. <br />
User creds are in seed file so it will load when first time we run application , login creds can be used from seed.ts. <br />
![image](https://github.com/prahllad/qp-assessment/assets/24870797/2d833af8-e95c-459c-9e38-c76c90a71b74)
![image](https://github.com/prahllad/qp-assessment/assets/24870797/f7a9d281-c49f-4e79-b6ba-5f619203c23c)

basic authentication need to use like this , For btter we can introduce JWT here.
