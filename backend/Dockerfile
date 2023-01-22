# pull the base image
FROM node:alpine

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm install

# add app
COPY . ./
RUN npm install -g sequelize-cli
RUN npx sequelize-cli model:generate --name User --attributes id:string,userName:string,email:string,password:string --force
RUN npx sequelize-cli model:generate --name Product --attributes id:string,name:string,price:string --force
RUN npx sequelize-cli db:migrate



# start app
CMD ["node", "index.js"]