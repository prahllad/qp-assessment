FROM node:20-alpine
WORKDIR /usr/local/app
COPY . .
RUN yarn install --production
RUN yarn add typescript
RUN npm run build
EXPOSE 3000
CMD ["node", "./dist/index.js"]
