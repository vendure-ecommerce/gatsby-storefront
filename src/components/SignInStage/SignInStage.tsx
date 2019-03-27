import { Formik } from 'formik';
import React from 'react';
import { useMutation, useQuery } from 'react-apollo-hooks';

import {
  GET_ACTIVE_ORDER_FOR_CHECKOUT,
  SET_ORDER_CUSTOMER,
} from '../../pages/checkout.vendure';

export function SignInStage({ nextStage }) {
  const { data, loading, error } = useQuery(GET_ACTIVE_ORDER_FOR_CHECKOUT, {
    fetchPolicy: 'network-only',
  });
  const setOrderCustomer = useMutation(SET_ORDER_CUSTOMER);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || !data.activeOrder) {
    return <div>Error! {error ? error.message : 'No active order'}</div>;
  }
  return (
    <>
      <Formik
        onSubmit={({ __typename, id, ...formData }) => {
          setOrderCustomer({
            variables: {
              input: formData,
            },
          }).then(() => nextStage());
        }}
        initialValues={
          data.activeOrder.customer || {
            firstName: '',
            lastName: '',
            emailAddress: '',
          }
        }
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">First name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="firstName"
                  value={values.firstName}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Last name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="lastName"
                  value={values.lastName}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email address</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="emailAddress"
                  value={values.emailAddress}
                />
              </div>
            </div>
            <button className="button is-primary" type="submit">
              Checkout as guest
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}
