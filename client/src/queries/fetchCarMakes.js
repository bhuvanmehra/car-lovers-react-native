import gql from 'graphql-tag';

export default gql`
  {
    AllMakes {
      name,
      models {
        name,
        id,
      }
    }
  }
`;
