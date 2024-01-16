import { GraphQLClient } from 'graphql-request';
import { graphql } from '@/gql';
import { type GetUserQuery as GetUserQueryType } from '@/gql/graphql';
import { User, UserFragment, OnlyUserNameFragment } from './user';

const client = new GraphQLClient('http://localhost:8080/graphql', {});

const GetUserQuery = graphql(/* GraphQL */ `
  query GetUser {
    users {
      ...UserItem
      ...OnlyUserNameItem
    }
  }
`);

const getUsers = () => {
  return client.request<GetUserQueryType>(GetUserQuery);
};

export default async function Home() {
  const data = await getUsers();
  return (
    <main>
      <h1>Users</h1>
      {data.users.map((user, id) => (
        <User user={user} key={id} />
      ))}
    </main>
  );
}
