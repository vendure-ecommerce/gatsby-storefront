import { gql } from 'apollo-boost';
import { graphql } from 'gatsby';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-apollo-hooks';

import Layout from '../components/layout';
import {
  GET_ACTIVE_ORDER,
  ORDER_FRAGMENT,
} from '../components/ShoppingCart/ShoppingCart';
import { formatPrice } from '../utilities/utilities';

import styles from './ProductDetail.module.scss';

const ADD_ITEM_TO_ORDER = gql`
  mutation AddItemToOrder($id: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $id, quantity: $quantity) {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT}
`;

const GET_ACTIVE_ORDER_ID = gql`
  {
    activeOrderId @client
  }
`;

const SET_ACTIVE_ORDER_ID = gql`
  mutation SetActiveOrderId($id: String!) {
    setActiveOrderId(id: $id) @client
  }
`;

export default ({ data }) => {
  const product = data.vendure.product;
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [quantity, setQuantity] = useState(1);
  const activeOrder = useQuery(GET_ACTIVE_ORDER);
  const {
    data: { activeOrderId },
  } = useQuery(GET_ACTIVE_ORDER_ID);
  const addToOrder = useMutation(ADD_ITEM_TO_ORDER, {
    variables: {
      id: variantId,
      quantity,
    },
  });
  const setActiveOrderId = useMutation(SET_ACTIVE_ORDER_ID);

  /**
   * Not sure if this is a total hack or not: After the first item is added to the
   * order, we refetch the activeOrder query to force update the Apollo cache.
   */
  function addToOrderSetOrderId() {
    addToOrder().then(res => {
      if (!activeOrderId) {
        return setActiveOrderId({
          variables: { id: res.data.addItemToOrder.id },
        }).then(() => activeOrder.refetch());
      }
    });
  }
  return (
      <Layout>
        <div className="columns">
          <figure className="column">
            <img src={product.featuredAsset.preview + '?preset=medium'} />
          </figure>
          <div className="column">
            <h1 className="title is-1">{product.name}</h1>

            <div className={styles.description} dangerouslySetInnerHTML={{ __html: product.description }} />

            <div>
              <div className="select">
                <select
                    value={variantId}
                    onChange={e => setVariantId(e.currentTarget.value)}
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
                <select
                    value={quantity}
                    onChange={e => setQuantity(+e.currentTarget.value)}
                >
                  {Array.from({ length: 10 }).map((_, index) => (
                      <option key={index} value={index + 1}>
                        {index + 1}
                      </option>
                  ))}
                </select>
              </div>
            </div>
            <button
                className="button is-primary is-large"
                onClick={addToOrderSetOrderId}
            >
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
