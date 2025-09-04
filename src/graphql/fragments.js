import { gql } from "@apollo/client";

export const REPOSITORY_FRAGMENT = gql`
  fragment RepositoryFragment on Repository {
    id
    name
    ownerName
    createdAt
    fullName
    reviewCount
    ratingAverage
    forksCount
    stargazersCount
    description
    language
    ownerAvatarUrl
  }
`;

export const REVIEW_FRAGMENT = gql`
  fragment ReviewFragment on Review {
    id
    text
    rating
    createdAt
  }
`;
