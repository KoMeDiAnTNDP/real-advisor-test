import { gql } from '@apollo/client';


export const getTailByName = gql`
query getTailByName($name: String) {
  long_tails(where: {tail: {_eq: $name}}) {
    json_id
    tail
  }
}
`
