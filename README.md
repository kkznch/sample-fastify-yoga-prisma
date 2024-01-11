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
$ pnpm backend codegen
$ pnpm backend dev
```

## References
- [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server/docs)
- [Pothos](https://pothos-graphql.dev/)
- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen/docs/getting-started)
- [graphql-yoga/examples/fastify](https://github.com/dotansimha/graphql-yoga/tree/main/examples/fastify)
- [GraphQL Server Example - graphql](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql)
- [sample-graphql-yoga](https://github.com/togana/sample-graphql-yoga/tree/main)
