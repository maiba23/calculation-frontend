import { gql } from "@apollo/client";

/**
 * Mutation for Summing Numbers
 */
export const MUTATE_SUM = gql`
  mutation SUM($numbers: [Int!]) {
    sum(numbers: $numbers)
  }
`;
