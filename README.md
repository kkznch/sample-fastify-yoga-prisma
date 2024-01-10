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

## References
- [Pothos](https://pothos-graphql.dev/)
- [GraphQL Server Example - graphql](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql)
- [sample-graphql-yoga](https://github.com/togana/sample-graphql-yoga/tree/main)
