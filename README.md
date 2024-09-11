# Projeto Express com Typeorm e Postgress

## Passos para instalar o projeto

1. Rode o comando `npm install` para instalar todas as dependências.
2. Copie o .env.example para .env na raiz do projeto
3. Configure o banco de dados no arquivo `data-source.ts` conforme sua preferência.
4. Para sincronizar as configurações do projeto, rode o comando `npm run database:sync`.
5. Rode o comando `npm start` para iniciar a aplicação.
6. Acesse as rotas do projeto:

   - **GET** - `http://localhost:3000/users/` - Lista todos os usuários.
   - **GET** - `http://localhost:3000/users/:id` - Filtra por um único usuário com base no `id`.
   - **GET** - `http://localhost:3000/users/faker/:numero_de_usuarios_que_deseja` - Para criar usuários fakes no banco
   - **POST**- `http://localhost:3000/user` - Para criar um usuário específico


![image](https://github.com/user-attachments/assets/85aeaf0c-f09e-4704-81a9-cf40ef1717fe)
