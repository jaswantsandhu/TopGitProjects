import { gql } from "@apollo/client";

export const GET_TOP_REPOSITORIES = gql`
  query GetTopRepositories($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            id
            name
            url
            description
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
            owner {
              url
              avatarUrl
              login
            }
            url
          }
        }
      }
    }
  }
`;
