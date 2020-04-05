# Um modelo de projeto NodeJS
Repositório voltado para ensinar e disponibilizar um projeto NodeJS pronto para iniciar o desenvolvimento!


## Preparando o Ambiente
Para iniar o desenvolvimento em NodeJS é nescessario tem o packout node em sua maquina.

Ele pode ser encontrado em [NodeJS](https://nodejs.org/en/).

## Observações
Esse projeto já popssui o nedemon instalado.

- O Nodemon é um utilitário que monitora qualquer alteração na sua fonte e reinicia automaticamente o servidor. Perfeito para o desenvolvimento. Instale-o usando o "npm install nodemon -D".

- Todo paccote instalado usando o '-D' é um pacote classificado como *devDependencies* e não sera utilizado quando fizer o deploy para produção.

- E para facilitar o seu uso, abra o _package.json_ e insira dentro da chave *scripts* **"start": "nodemon index.js"**

"scripts": {  

    "start": "nodemon index.js"  
    
 }
  
Após isso basta dentro da raiz do projeto executar o comando *npm start* ou *yarn start* caso utilize o yarn como gerenciador de pacotes.

E o seu servidor a cada alteração no projeto salva ele reiniciara e já estara com as atualizações funcionando.
  
