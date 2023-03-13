import { gql } from "@apollo/client";



export const GET_REPOSITORIES = gql`
  query SearchRepositories($userQuery: String!) {
    search(query: $userQuery, type: REPOSITORY, first: 60) {
      edges {
        node {
          ... on Repository {
             defaultBranchRef {
                  target {
                   ... on Commit {
                    history(first: 1) {
                     nodes {
                      committedDate
                    }
                  }
                 }
               }
             }
            id
            url
            description
            stargazerCount
            nameWithOwner
            stargazers {
                totalCount
            }
            owner {
              avatarUrl
            }
          }
        }
      }
    }
  }
`;