/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHousing = /* GraphQL */ `
  query GetHousing($id: ID!) {
    getHousing(id: $id) {
      id
      name
      description
      locality
      Category
      Developer
      CompletionDate
      Tenure
      LandTitle
      Storey
      Unit
      Block
      Parking
      LaunchPrice
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listHousings = /* GraphQL */ `
  query ListHousings(
    $filter: ModelHousingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHousings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        locality
        Category
        Developer
        CompletionDate
        Tenure
        LandTitle
        Storey
        Unit
        Block
        Parking
        LaunchPrice
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
