import { gql } from "graphql-request";

export const getProductsByCategory = gql`
query($category: String!){
  productCollection (where: {category: $category}){
    items{
      title
      price
      height
      width
      image {
        url(transform:{width: 1200, format: WEBP})
      }
      category
    }
  }
}`