# qp-assessment
 install package:- npm i
 run server:- npm run dev
 .env need to created in local:-
 # PORT = 4000
# MONGO_URI = ''
# To build Docker :-
 in root ->  docker build -t grossery-booking-app .
 in root -> docker run --env-file .env -p 3000:3000 grossery-booking-app

 we can access [api in ](http://localhost:3000/admin)  to test if server is up inside docker.
User creds are in seed file so it will load when first time we run application , login creds can be used from seed.ts.
![image](https://github.com/prahllad/qp-assessment/assets/24870797/2d833af8-e95c-459c-9e38-c76c90a71b74)
basic authentication need to use like this , For btter we can introduce JWT here.
