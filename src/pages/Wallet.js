import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../component/Header';
import FormWallet from '../component/FormWallet';
import TableWallet from '../component/TableWallet';
import FormEditWallet from '../component/FormEditWallet';
import { currencieThunk } from '../actions';

function Wallet() {
  const dispatch = useDispatch();
  const { wallet: { isEdit } } = useSelector((state) => state);
  useEffect(() => { dispatch(currencieThunk()); }, [dispatch]);

  return (
    <>
      <Header />
      {
        isEdit ? <FormEditWallet /> : <FormWallet />
      }

      <TableWallet />
    </>
  );
}

export default Wallet;
