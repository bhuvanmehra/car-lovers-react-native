import gql from 'graphql-tag';

export default gql`
  {
    CarOfTheWeek {
      modelId,
      review,
      model {
        id,
        name,
        price,
        imageUrl
      }
    }
  }
`;
