import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../component/Header';
import FormWallet from '../component/FormWallet';
import { currencieThunk } from '../actions';

function Wallet() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(currencieThunk()); }, [dispatch]);

  return (
    <>
      <Header />
      <FormWallet />
    </>
  );
}

export default Wallet;
