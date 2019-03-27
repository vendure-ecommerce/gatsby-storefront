import { gql } from "apollo-boost";

import { ORDER_FRAGMENT } from "../components/ShoppingCart/ShoppingCart.vendure";

export const ADD_ITEM_TO_ORDER = gql`
  mutation AddItemToOrder($id: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $id, quantity: $quantity) {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT}
`;

export const GET_ACTIVE_ORDER_ID = gql`
  {
    activeOrderId @client
  }
`;

export const SET_ACTIVE_ORDER_ID = gql`
  mutation SetActiveOrderId($id: String!) {
    setActiveOrderId(id: $id) @client
  }
`;
