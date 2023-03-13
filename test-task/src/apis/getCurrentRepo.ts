import { gql } from "@apollo/client";



export const GET_CURRENT_REPO = gql`
  query GetCurrentRepo($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
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
     languages(last:10) {
              edges {
                node {
                  id
                  name 
                  color           
                }
              }
            }
        owner {
              avatarUrl
        }
        nameWithOwner
        url
        description
        stargazerCount
  }
  }
`;