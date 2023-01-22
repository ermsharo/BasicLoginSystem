npm install --save-dev sequelize-cli

npx sequelize-cli model:generate --name userInfo --attributes id:string,username:string,email:string,password: password
npx sequelize-cli db:migrate
