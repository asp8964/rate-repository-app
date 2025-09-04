import { gql } from "@apollo/client";
import { REPOSITORY_FRAGMENT, REVIEW_FRAGMENT } from "./fragments";

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      totalCount
      edges {
        cursor
        node {
          ...RepositoryFragment
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
`;

export const ME = gql`
  query Me($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewFragment
            repository {
              id
              fullName
            }
          }
        }
      }
    }
  }
  ${REVIEW_FRAGMENT}
`;

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      ...RepositoryFragment
      url
      reviews(first: $first, after: $after) {
        totalCount
        edges {
          node {
            ...ReviewFragment
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
  ${REVIEW_FRAGMENT}
`;
