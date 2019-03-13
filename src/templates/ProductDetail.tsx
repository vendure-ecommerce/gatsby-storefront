import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const product = data.vendure.product;
  return (
      <Layout>
        <div className="columns">
          <figure className="column">
            <img
                src={product.featuredAsset.preview + "?preset=medium"}
            />
          </figure>
          <div className="column">
            <h1 className="title is-1">{product.name}</h1>

            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>
        </div>
      </Layout>
  )
}

export const query = graphql`
  query($id: ID!) {
    vendure {
      product(id: $id) {
        name
        slug
        description
        featuredAsset {
          preview
        }
        variants {
          priceWithTax
          currencyCode
        }
      }
    }
  }
`;