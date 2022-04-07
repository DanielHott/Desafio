# Back-end do desafio da Mobix!

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/DanielHott/Pagina-de-Receitas/blob/master/LICENSE)

### Disponível em https://mobix-project.herokuapp.com/

#### Esta aplicação é um desafio do processo seletivo da Mobix.

## Tecnologias utilizadas:

Node.js, Sequelize, Cors, Body-Parser, Heroku, Docker, MySql, Nodemon, Dotenv e Postgres.

## Aplicação: 

Esta aplicação possui 3 endpoints, um que retorna todos os personagens cadastrados na url https://mobix-project.herokuapp.com/
#### Retorno do endpoint "/":
![Web 1](https://github.com/DanielHott/imagens/blob/master/mobix1.png)

## Segundo endpoint
O segundo endpoint é utilizado para cadastrar novos personagens pelo metodo post no banco de dados em https://mobix-project.herokuapp.com/new

### Para cadastrar são necessários na resquisição post com seu body em json:

- name: Nome do personagem (String)
- codename: Como o personagem é conhecido nos livros (String)
- years: Idade do personagem (Number)
- localization: Qual a localidade que o personagem vive? (String)
- informations: Url de detalhes sobre o personagem (String)
- id_book: Pelo menos um livro que o personagem aparece (Number)

## Terceiro endpoint
O terceiro endpoint te retorna o personagem pelo name na url https://mobix-project.herokuapp.com/character

- Faça uma requisição do tipo post com "name" no seu body tipo json e a aplicação te retornará o personagem!
- Não achou o personagem? Use o Segundo endpoint para cadastrar-lo!

## Copiando para sua máquina:

Clone o projeto

```bash
  git clone https://github.com/DanielHott/Desafio.git
```

Entre no diretório do projeto

```bash
  cd Desafio
```

Instale as dependências

```bash
  npm install
```
- Configure a config.json para o servidor da sua máquina

```bash
  npx sequelize db:create
  npx sequelize db:migrate
  npx sequelize db:seed:all
```

Inicie o servidor

```bash
  npm start
```
- Pronto, já foi criado um servidor na sua máquina para o projeto!


### Detalhes:

Neste projeto utilizei o Supabase para hospedar o servidor da aplicação, conteinerizei com docker, deploy com Heroku, Imnsonia para requisições à API
durante o desenvolvimento. Utilizei Cors para lidar com as requisições do front, bodyparser para ler o body no formato json.

 ### Desenvolvido por Daniel Hott

