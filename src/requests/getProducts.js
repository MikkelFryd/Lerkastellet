import { gql } from "graphql-request";

export const getProducts = gql`
query{
  productCollection{
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