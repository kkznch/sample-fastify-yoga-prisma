# Sample graphql-yoga, prisma, pothos

## Getting started
### Install
```sh
$ git clone git@github.com:kkznch/sample-yoga-prisma-pothos.git
$ cd sample-yoga-prisma-pothos
$ pnpm install
```

### Create database and seed
```sh
$ pnpm backend prisma:migrate
$ pnpm backend prisma:generate
```

### Start the GraphQL server
```sh
$ pnpm backend dev
```
