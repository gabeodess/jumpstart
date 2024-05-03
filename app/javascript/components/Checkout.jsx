import React, {useCallback, useEffect, useState} from 'react';
import {loadStripe} from "@stripe/stripe-js";
import {EmbeddedCheckout, EmbeddedCheckoutProvider} from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51PANx7JZiQGLR1lqs1rsXR8fHzHDbCqD52wns8xZS9aDaPM4pc7Or7Fm2qCzY9Qa3pM2Y2uwq0u9E0wqK3FwsQfp00y2IaO75Q');

export default () => {
  const [user, setUser] = useState();

  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("/checkout/session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = {fetchClientSecret};

  const fetchUser = async () => {
    setUser(await (await fetch('/api/session')).json());
  }

  useEffect(() => {
    fetchUser();
  }, [])
  
  return <div>
    <h1 className="display-4">Checkout</h1>
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout/>
      </EmbeddedCheckoutProvider>
    </div>
  </div>
}