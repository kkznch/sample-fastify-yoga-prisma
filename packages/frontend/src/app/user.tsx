import { FragmentType, getFragmentData } from '@/gql/fragment-masking';
import { graphql } from '@/gql';

export const UserFragment = graphql(/* GraphQL */ `
  fragment UserItem on User {
    id
    name
  }
`);

export const OnlyUserNameFragment = graphql(/* GraphQL */ `
  fragment OnlyUserNameItem on User {
    name
  }
`);

type Props = {
  user: FragmentType<typeof UserFragment>;
};

export const User = (props: Props) => {
  const user = getFragmentData(UserFragment, props.user);
  return (
    <>
      <p>id: {user.id}</p>
      <p>name: {user.name}</p>
    </>
  );
};
