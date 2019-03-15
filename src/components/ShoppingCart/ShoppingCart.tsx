import { faMinus, faPlus, faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { gql } from 'apollo-boost';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-apollo-hooks';

import { formatPrice } from '../../utilities/utilities';

import styles from './ShoppingCart.module.scss';

export const ORDER_FRAGMENT = gql`
  fragment ActiveOrder on Order {
    id
    code
    total
    currencyCode
    lines {
      id
      productVariant {
        id
        name
        currencyCode
      }
      unitPriceWithTax
      quantity
      totalPrice
      featuredAsset {
        id
        preview
      }
    }
  }
`;

export const GET_ACTIVE_ORDER = gql`
  {
    activeOrder {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT}
`;

const ADJUST_ITEM_QUANTITY = gql`
  mutation AdjustItemQuantity($id: ID!, $quantity: Int!) {
    adjustItemQuantity(orderItemId: $id, quantity: $quantity) {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT}
`;

export function ShoppingCart() {
  const { data, error, loading } = useQuery(GET_ACTIVE_ORDER);
  const [opened, setOpened] = useState(false);
  const adjustItemQuantity = useMutation(ADJUST_ITEM_QUANTITY);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }
  return (
      <>
        <button className={'button is-primary ' + styles.cartButton} onClick={() => setOpened(true)}>
          <FontAwesomeIcon icon={faShoppingBag} pull="left" />
          {data.activeOrder
              ? data.activeOrder.lines.reduce(
                  (total, line) => total + line.quantity,
                  0,
              )
              : 0}
        </button>
        <div
            className={[styles.cartTray, opened && styles.opened]
                .filter(Boolean)
                .join(' ')}
        >
          <button className="delete" onClick={() => setOpened(false)} />
          <h3 className="title is-3">Cart</h3>
          {data.activeOrder ? (
              <CartContentsList
                  order={data.activeOrder}
                  adjustQuantity={(id, quantity) =>
                      adjustItemQuantity({
                        variables: { id, quantity },
                      })
                  }
              />
          ) : (
              <div>Empty!</div>
          )}
        </div>
      </>
  );
}

function CartContentsList({ order, adjustQuantity }) {
  return (
      <div className={styles.cartContents}>
        {order.lines.map(line => (
            <CartContentsRow
                line={line}
                adjustQuantity={adjustQuantity}
                key={line.id}
            />
        ))}
        <div className={styles.totalRow}>
          <span>Total:</span>
          <span>{formatPrice(order.currencyCode, order.total)}</span>
        </div>
      </div>
  );
}

function CartContentsRow({ line, adjustQuantity }) {
  return (
      <div className={styles.cartRow}>
        <div className={styles.rowImage}>
          <img src={`${line.featuredAsset.preview}?preset=tiny`} />
        </div>
        <div className={styles.rowDetail}>
          <div>{line.productVariant.name}</div>
          <div className={styles.qtyRow}>
            <button
                className={styles.adjustQuantity}
                onClick={() => adjustQuantity(line.id, line.quantity - 1)}
            >
              <FontAwesomeIcon icon={faMinus} color="#999"/>
            </button>
            {line.quantity}
            <button
                className={styles.adjustQuantity}
                onClick={() => adjustQuantity(line.id, line.quantity + 1)}
            >
              <FontAwesomeIcon icon={faPlus} color="#999"/>
            </button>
            <div className={styles.rowTotal}>{formatPrice(line.productVariant.currencyCode, line.totalPrice)}</div>
          </div>
        </div>
      </div>
  );
}
