import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../component/Header';
import FormWallet from '../component/FormWallet';
import FormTable from '../component/FormTable';
import { currencieThunk } from '../actions';

function Wallet() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(currencieThunk()); }, [dispatch]);

  return (
    <>
      <Header />
      <FormWallet />
      <FormTable />
    </>
  );
}

export default Wallet;
