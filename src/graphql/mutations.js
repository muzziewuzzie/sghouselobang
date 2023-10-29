/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHousing = /* GraphQL */ `
  mutation CreateHousing(
    $input: CreateHousingInput!
    $condition: ModelHousingConditionInput
  ) {
    createHousing(input: $input, condition: $condition) {
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
export const updateHousing = /* GraphQL */ `
  mutation UpdateHousing(
    $input: UpdateHousingInput!
    $condition: ModelHousingConditionInput
  ) {
    updateHousing(input: $input, condition: $condition) {
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
export const deleteHousing = /* GraphQL */ `
  mutation DeleteHousing(
    $input: DeleteHousingInput!
    $condition: ModelHousingConditionInput
  ) {
    deleteHousing(input: $input, condition: $condition) {
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
