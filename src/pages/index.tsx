import { graphql, Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import { ProductCard } from '../components/ProductCard/ProductCard';
import SEO from '../components/seo';

import styles from './home.module.scss';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <section className={styles.productList}>
      { data.vendure.search.items.map(item => <ProductCard product={item} key={item.productId} />) }
    </section>
  </Layout>
);

export const query = graphql`
  {
    vendure {
      search(input: { groupByProduct: true }) {
        items {
          productId
          productName
          description
          slug
          currencyCode
          priceWithTax {
            ... on Vendure_PriceRange {
              min
              max
            }
            ... on Vendure_SinglePrice {
              value
            }
          }
          productPreview
        }
      }
    }
  }`;

export default IndexPage;
