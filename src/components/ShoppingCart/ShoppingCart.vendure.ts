import { gql } from "apollo-boost";

export const ORDER_FRAGMENT = gql`
  fragment ActiveOrder on Order {
    id
    code
    state
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

export const ADJUST_ITEM_QUANTITY = gql`
  mutation AdjustItemQuantity($id: ID!, $quantity: Int!) {
    adjustItemQuantity(orderItemId: $id, quantity: $quantity) {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT}
`;
