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

        <p>
          Despesa total R$
          <span
            data-testid="total-field"
          >
            {
              total === undefined ? 0 : total.toFixed(2)
            }
          </span>
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
