import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';

import { ConfirmationStage } from '../components/ConfirmationStage/ConfirmationStage';
import Layout from '../components/layout';
import { PaymentStage } from '../components/PaymentStage/PaymentStage';
import { ShippingStage } from '../components/ShippingStage/ShippingStage';
import { CartContentsList } from '../components/ShoppingCart/ShoppingCart';
import { GET_ACTIVE_ORDER } from '../components/ShoppingCart/ShoppingCart.vendure';
import { SignInStage } from '../components/SignInStage/SignInStage';

function useProgress(initialStage = 0) {
  const [currentStage, setStage] = useState(initialStage);
  return {
    currentStage,
    setStage,
    nextStage: () => currentStage < 3 && setStage(currentStage + 1),
    prevStage: () => currentStage > 0 && setStage(currentStage - 1),
  };
}

const CheckoutPage = () => {
  const { data, error, loading } = useQuery(GET_ACTIVE_ORDER);
  const { currentStage, setStage, nextStage, prevStage } = useProgress();
  useEffect(() => {
    if (data.activeOrder && data.activeOrder.state === 'ArrangingPayment') {
      setStage(2);
    }
  }, [data]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || !data.activeOrder) {
    return <div>Error! {error ? error.message : 'No active order'}</div>;
  }
  const stages = [
    { name: 'Sign in', render: () => <SignInStage nextStage={nextStage} /> },
    { name: 'Shipping', render: () => <ShippingStage nextStage={nextStage} /> },
    {
      name: 'Payment',
      render: () => (
        <PaymentStage nextStage={nextStage} prevStage={prevStage} />
      ),
    },
    {
      name: 'Confirmation',
      render: () => <ConfirmationStage nextStage={nextStage} />,
    },
  ];
  return (
    <Layout>
      <div className="columns">
        <div className="column is-three-quarters">
          <div>
            <ol>
              {stages.map((stage, index) => (
                <li
                  key={stage.name}
                  className={
                    index === currentStage ? 'has-text-weight-bold' : ''
                  }
                >
                  {stage.name}
                </li>
              ))}
            </ol>
          </div>
          {stages[currentStage].render()}
        </div>
        <div className="column">
          <CartContentsList order={data.activeOrder} />
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
