import { gql } from "graphql-request";


export const getCategories = gql`
query{
    productCollection(order: sys_firstPublishedAt_ASC){
        items{
            category
        }
    }
}
`