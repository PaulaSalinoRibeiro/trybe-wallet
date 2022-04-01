import React from 'react';
import { useSelector } from 'react-redux';
import { GrMoney } from 'react-icons/gr';

function Header() {
  const { user: { email },
  } = useSelector((state) => state);

  return (
    <>
      <GrMoney />
      <div>
        <p>Email:</p>
        <p data-testid="email-field">{email}</p>
        <p>Despesa Total R$</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    </>
  );
}

export default Header;
