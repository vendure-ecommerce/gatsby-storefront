import { gql } from "apollo-boost"

export const GET_AVAILABLE_COUNTRIES = gql`
  query GetAvailableCountries {
    availableCountries {
      id
      code
      name
    }
  }
`;
