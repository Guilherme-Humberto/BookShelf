import { gql } from "apollo-boost";

export const getBooksQuery = gql`
  {
    books {
      id
      name
      genre
      author {
        name,
        age
      }
    }
  }
`;
export const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

export const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`