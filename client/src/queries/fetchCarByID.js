import gql from 'graphql-tag';

export default gql`
  query fetchCarByID ($id: Int) {
    Car(id: $id) {
      id,
      name,
      price,
      imageUrl,
    }
  }
`;
