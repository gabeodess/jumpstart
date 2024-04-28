import React, { useEffect, useState } from 'react';

export default () => {
  const [user, setUser] = useState();

  const fetchUser = async () => {
    setUser(await (await fetch('/api/session')).json());
  }

  useEffect(() => {
    fetchUser();
  }, [])
  
  return <div>
    <h1 className="display-4">Checkout</h1>
  </div>
}