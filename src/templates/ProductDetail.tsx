import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo-hooks';
import { formatPrice } from '../utilities/utilities';
import { ORDER_FRAGMENT } from "../components/ShoppingCart/ShoppingCart"

const ADD_ITEM_TO_ORDER = gql`
  mutation AddItemToOrder($id: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $id, quantity: $quantity) {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT}
`;

export default ({ data }) => {
  const product = data.vendure.product;
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [quantity, setQuantity] = useState(1);
  const addToOrder = useMutation(ADD_ITEM_TO_ORDER, {
    variables: {
      id: variantId,
      quantity,
    },
  });
  return (
    <Layout>
      <div className="columns">
        <figure className="column">
          <img src={product.featuredAsset.preview + '?preset=medium'} />
        </figure>
        <div className="column">
          <h1 className="title is-1">{product.name}</h1>

          <div dangerouslySetInnerHTML={{ __html: product.description }} />
          <div className="select">
          <select
            value={variantId}
            onChange={e => setVariantId(e.target.value)}
          >
            {product.variants.map(variant => (
              <option key={variant.id} value={variant.id}>
                {variant.name}{' '}
                {formatPrice(variant.currencyCode, variant.priceWithTax)}
              </option>
            ))}
          </select>
          </div>
          <div className="select">
          <select value={quantity} onChange={e => setQuantity(+e.target.value)}>
            {Array.from({ length: 10 }).map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          </div>
          <button className="button is-primary is-large" onClick={addToOrder}>
            Add to cart
          </button>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: ID!) {
    vendure {
      product(id: $id) {
        id
        name
        slug
        description
        featuredAsset {
          id
          preview
        }
        variants {
          id
          name
          priceWithTax
          currencyCode
        }
      }
    }
  }
`;
