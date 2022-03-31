import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GrMoney } from 'react-icons/gr';

function Header(props) {
  const { userEmail } = props;
  return (
    <>
      <GrMoney />
      <div>
        <p>Email:</p>
        <p data-testid="email-field">{userEmail}</p>
        <p>Despesa Total R$</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>

    </>
  );
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
