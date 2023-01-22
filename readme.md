# Teste modelo de login



## Como executar

### Subindo o nosso banco de dados

    docker compose up
  
Sobe o container com a nossa maquina com postegresql e o deixa exposto na porta  **5432**

### Subindo o nosso servidor node

Após subir o nosso banco de dados, dentro da pasta **backend** rodar o seguinte comando

	

    npm i 
    nodemon index.js 

  
Inicia o nosso servidor na porta **5000**
   
Para realizar a migração do nosso modelo de dados rodar os seguinte comandos

    npm install --save-dev sequelize-cli

	npx sequelize-cli db:migrate
  
 
Para executar o nosso cliente, em react executar o seguinte comando no diretório **frontend/my-app**

    npm i 
    npm start 







