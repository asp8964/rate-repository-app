import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      user {
        id
        username
        createdAt
        reviewCount
      }
      accessToken
      expiresAt
    }
  }
`;
