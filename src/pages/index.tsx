import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { ProductCard } from '../components/ProductCard/ProductCard';
import styles from "./home.module.scss";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Products</h1>
    <section className={styles.productList}>
      { data.vendure.products.items.map(item => <ProductCard product={item} key={item.id} />) }
    </section>
  </Layout>
)

export const query = graphql`
  {
    vendure {
      products {
        items {
          id
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
  }`;

export default IndexPage
