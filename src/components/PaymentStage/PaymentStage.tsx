import { Formik } from 'formik';
import React from 'react';
import { useMutation } from 'react-apollo-hooks';

import { ADD_PAYMENT_TO_ORDER } from '../../pages/checkout.vendure';

export function PaymentStage({ nextStage, prevStage }) {
  const addPaymentToOrder = useMutation(ADD_PAYMENT_TO_ORDER);
  return (
    <>
      <Formik
        onSubmit={formData => {
          addPaymentToOrder({
            variables: {
              input: {
                method: 'example-payment-provider',
                metadata: {
                  foo: 'bar',
                },
              },
            },
          }).then(() => nextStage());
        }}
        initialValues={{
          cardNumber: '',
          expiryYear: '',
          expiryMonth: '',
        }}
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
              <label className="label">Card number</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="cardNumber"
                  value={values.cardNumber}
                />
              </div>
            </div>
            <div className="columns">
              <div className="field column">
                <label className="label">Expiry month</label>
                <div className="control">
                  <div className="select">
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="expiryMonth"
                      value={values.expiryMonth}
                    >
                      {Array.from({ length: 12 }).map((_, index) => {
                        const month = index + 1;
                        return (
                          <option value={month} key={month}>
                            {month}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="field column">
                <label className="label">Expiry year</label>
                <div className="control">
                  <div className="select">
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="expiryYear"
                      value={values.expiryYear}
                    >
                      {Array.from({ length: 10 }).map((_, index) => {
                        const year = new Date().getFullYear() + index;
                        return (
                          <option value={year} key={year}>
                            {year}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <button className="button is-primary" type="submit">
              Confirm order
            </button>
          </form>
        )}
      </Formik>
      <button className="button is-primary" onClick={prevStage}>
        Go back
      </button>
    </>
  );
}
