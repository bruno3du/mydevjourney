# My DevJourney - Blog

Criei este projeto para experienciar alguns techs que estou estudando, como NextJS, Prisma, TailwindCSS, tRPC e NextAuth.

Além disso, será um projeto CRUD com usuário e post onde cada usuário poderá criar, editar, ver e excluir seus posts.
Todos os visitantes do blog poderão visualizar os posts de todos os usuários/autores.
O login será feito com Discord, e futuramente irei adicionar outras formas de login.
O usuário deverá ser capaz de criar posts com imagens e textos.

## 🚀 Começando

Para executar o projeto, será necessário instalar os seguintes programas:

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Docker](https://www.docker.com/products/docker-desktop)

## 📚 Documentação

- [NextJS](https://nextjs.org/docs)
- [Prisma](https://www.prisma.io/docs/)
- [TailwindCSS](https://tailwindcss.com/docs)
- [tRPC](https://trpc.io/docs/introduction)
- [NextAuth](https://next-auth.js.org/getting-started/introduction)

## 📦 Desenvolvimento

Para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub num diretório de sua preferência:

```shell
cd "diretorio de sua preferencia"
git clone
```

## 📦 Configuração

Para configurar o projeto, é necessário instalar as dependências do projeto:

```shell
yarn install
```

## 📦 Banco de Dados

Para configurar o banco de dados, é necessário criar um arquivo .env na raiz do projeto com as seguintes variáveis:

```shell
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/devjourney?schema=public"
```

## 📦 Execução

Para executar o projeto, é necessário executar o seguinte comando:

```shell
yarn dev
```

## 📦 Docker

Para executar o projeto com o docker, é necessário executar os seguintes comandos:

```shell
docker-compose up -d
```

## 📦 Migrations

Para executar as migrations, é necessário executar os seguintes comandos:

```shell
yarn prisma migrate dev
```
