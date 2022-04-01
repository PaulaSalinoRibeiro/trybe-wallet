import React from 'react';
import { useSelector } from 'react-redux';
import { GrMoney } from 'react-icons/gr';

function Header() {
  const { user: { email },
    wallet } = useSelector((state) => state);

  return (
    <>
      <GrMoney />
      <div>
        <p>Email:</p>
        <p data-testid="email-field">{email}</p>
        <p>Despesa Total R$</p>
        <p data-testid="total-field">{wallet.total}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    </>
  );
}

export default Header;
