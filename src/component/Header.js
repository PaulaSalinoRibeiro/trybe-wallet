import React from 'react';
import { useSelector } from 'react-redux';
import { GrMoney } from 'react-icons/gr';

function Header() {
  const { user: { email },
    wallet: { total } } = useSelector((state) => state);

  return (
    <>
      <GrMoney />
      <div>
        <p
          data-testid="email-field"
        >
          <span>Email:</span>
          {email}
        </p>

        <p
          data-testid="total-field"
        >
          <span>Despesa total R$</span>
          {
            total === undefined ? 0 : total
          }
        </p>

        <p
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </div>
    </>
  );
}

export default Header;
