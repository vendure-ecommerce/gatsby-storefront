import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-apollo-hooks';
import { gql } from 'apollo-boost';
import styles from './ShoppingCart.module.scss';
import { formatPrice } from '../../utilities/utilities';

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
`

const GET_ACTIVE_ORDER = gql`
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
  console.log(data);
  return (
    <>
      <button className="button is-primary" onClick={() => setOpened(true)}>
        Cart: {data.activeOrder
          ? data.activeOrder.lines.reduce(
              (total, line) => total + line.quantity,
              0
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
        {(() => {
          if (data.activeOrder) {
            return (
              <table>
                <tbody>
                  {data.activeOrder.lines.map(line => (
                    <tr key={line.id}>
                      <td>
                        <img
                          src={`${line.featuredAsset.preview}?preset=tiny`}
                        />
                      </td>
                      <td>{line.productVariant.name}</td>
                      <td>
                        <button
                          className={styles.adjustQuantity + ' button is-small'}
                          onClick={() =>
                            adjustItemQuantity({
                              variables: {
                                id: line.id,
                                quantity: line.quantity - 1,
                              },
                            })
                          }
                        >
                          -
                        </button>
                        {line.quantity}
                        <button
                          className={styles.adjustQuantity + ' button is-small'}
                          onClick={() =>
                            adjustItemQuantity({
                              variables: {
                                id: line.id,
                                quantity: line.quantity + 1,
                              },
                            })
                          }
                        >
                          +
                        </button>
                      </td>
                      <td>
                        {formatPrice(
                          line.productVariant.currencyCode,
                          line.totalPrice
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className={styles.totalRow}>
                    <td>Total:</td>
                    <td></td>
                    <td></td>
                    <td>{formatPrice(data.activeOrder.currencyCode, data.activeOrder.total)}</td>
                  </tr>
                </tbody>
              </table>
            );
          } else {
            return <div>Empty!</div>;
          }
        })()}
      </div>
    </>
  );
}
