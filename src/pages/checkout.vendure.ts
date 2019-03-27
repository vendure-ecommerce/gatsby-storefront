import { gql } from "apollo-boost";

import { ORDER_FRAGMENT } from "../components/ShoppingCart/ShoppingCart.vendure";

export const ADD_ADDRESS_TO_ORDER = gql`
  mutation AddAddressToOrder($input: CreateAddressInput!) {
    setOrderShippingAddress(input: $input) {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT}
`;

export const GET_ACTIVE_ORDER_FOR_CHECKOUT = gql`
  {
    activeOrder {
      ...ActiveOrder
      shippingAddress {
        fullName
        company
        streetLine1
        streetLine2
        city
        province
        postalCode
        countryCode
        phoneNumber
      }
      customer {
        id
        firstName
        lastName
        emailAddress
      }
    }
  }
  ${ORDER_FRAGMENT}
`;

export const SET_ORDER_CUSTOMER = gql`
  mutation SetOrderCustomer($input: CreateCustomerInput!) {
    setCustomerForOrder(input: $input) {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT}
`;

export const TRANSITION_TO_ARRANGING_PAYMENT = gql`
    mutation TransitionToArrangingPayment {
        transitionOrderToState(state: "ArrangingPayment") {
            ...ActiveOrder
        }
    }
    ${ORDER_FRAGMENT}
`;


export const ADD_PAYMENT_TO_ORDER = gql`
  mutation AddPaymentToOrder($input: PaymentInput!) {
    addPaymentToOrder(input: $input) {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT}
`;
