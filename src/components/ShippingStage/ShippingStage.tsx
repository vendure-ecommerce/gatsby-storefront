import { Formik } from 'formik';
import React from 'react';
import { useMutation, useQuery } from 'react-apollo-hooks';

import { OrderAddress } from '../../../vendure-types';
import {
  ADD_ADDRESS_TO_ORDER,
  GET_ACTIVE_ORDER_FOR_CHECKOUT,
  TRANSITION_TO_ARRANGING_PAYMENT,
} from '../../pages/checkout.vendure';
import { CountrySelect } from '../CountrySelect/CountrySelect';

export function ShippingStage({ nextStage }) {
  const { data, loading, error } = useQuery(GET_ACTIVE_ORDER_FOR_CHECKOUT, {
    fetchPolicy: 'network-only',
  });
  const addAddressToOrder = useMutation(ADD_ADDRESS_TO_ORDER);
  const transitionToArrangingPayment = useMutation(
    TRANSITION_TO_ARRANGING_PAYMENT,
  );
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || !data.activeOrder) {
    return <div>Error! {error ? error.message : 'No active order'}</div>;
  }
  return (
    <>
      <Formik
        onSubmit={formData => {
          addAddressToOrder({
            variables: {
              input: formData,
            },
          })
            .then(() => transitionToArrangingPayment())
            .then(() => nextStage());
        }}
        initialValues={
          Object.entries(data.activeOrder.shippingAddress)
            .filter(([key]) => key !== '__typename')
            .reduce((initialValues, [key, value]) => {
              return { ...initialValues, [key]: value || '' };
            }, {}) as OrderAddress
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
              <label className="label">Full name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="fullName"
                  value={values.fullName}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Company</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="company"
                  value={values.company}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Street line 1</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="streetLine1"
                  value={values.streetLine1}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Street line 2</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="streetLine2"
                  value={values.streetLine2}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">City</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="city"
                  value={values.city}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Province</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="province"
                  value={values.province}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Postal code</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="postalCode"
                  value={values.postalCode}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Country</label>
              <div className="control">
                <CountrySelect
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="countryCode"
                  value={values.countryCode}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Phone number</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="phoneNumber"
                  value={values.phoneNumber}
                />
              </div>
            </div>

            <button className="button is-primary" type="submit">
              Proceed to payment
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}
