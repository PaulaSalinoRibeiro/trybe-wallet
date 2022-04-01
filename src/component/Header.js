import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import wallet from '../assets/wallet.png';
import { getTotal } from '../reducers/wallet';
import HeaderSytled from '../styles/HeaderStyled';

function Header() {
  const { user: { email },
    wallet: { expenses } } = useSelector((state) => state);

  const [total, setTotal] = useState(0);
  useEffect(() => { setTotal(getTotal(expenses)); }, [expenses]);

  return (
    <HeaderSytled>
      <img src={ wallet } alt="wallet" />
      <div>
        <p
          data-testid="email-field"
        >
          <span>Email:</span>
          {email}
        </p>

        <p>
          Despesa total R$
          <span
            data-testid="total-field"
          >
            {total.toFixed(2)}
          </span>
        </p>

        <p
          data-testid="header-currency-field"
        >
          BRL
        </p>

      </div>
    </HeaderSytled>
  );
}

export default Header;
