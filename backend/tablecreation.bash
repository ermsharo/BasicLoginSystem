npx sequelize-cli model:generate --name User --attributes id:string,userName:string,email:string,password:string --force
npx sequelize-cli model:generate --name Product --attributes id:string,name:string,price:string --force

npx sequelize-cli db:migrate

node index.js