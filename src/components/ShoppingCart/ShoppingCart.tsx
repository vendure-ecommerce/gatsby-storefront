import React, { useState } from "react"
import { useQuery } from "react-apollo-hooks"
import { gql } from "apollo-boost"
import styles from "./ShoppingCart.module.scss"
import { formatPrice } from "../../utilities/utilities"

const GET_ACTIVE_ORDER = gql`
  {
    activeOrder {
      id
      code
      total
      lines {
        id
        productVariant {
          name
          currencyCode
        }
        unitPriceWithTax
        quantity
        totalPrice
        featuredAsset {
          preview
        }
      }
    }
  }
`

export function ShoppingCart() {
  const { data, error, loading } = useQuery(GET_ACTIVE_ORDER)
  const [opened, setOpened] = useState(false)
  console.log(data, error, loading)
  if (loading || data.activeOrder === undefined) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }
  return (
    <>
      <button className="button is-info" onClick={() => setOpened(true)}>
        {data.activeOrder
          ? data.activeOrder.lines.reduce(
              (total, line) => total + line.quantity,
              0
            )
          : 0}
      </button>
      <div
        className={[styles.cartTray, opened && styles.opened]
          .filter(Boolean)
          .join(" ")}
      >
        <button className="delete" onClick={() => setOpened(false)}/>
        <h3 className="title is-3">Basket</h3>
        <table>
          <tbody>
          {data.activeOrder.lines.map(line => (
            <tr key={line.id}>
              <td>{line.productVariant.name}</td>
              <td>{line.quantity}</td>
              <td>
                {formatPrice(line.productVariant.currencyCode, line.totalPrice)}
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
