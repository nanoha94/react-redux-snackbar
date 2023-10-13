import React from 'react'
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import { openSnackbar } from '../redux/snackbar';
import { store } from '../redux/store';

const Mypage = () => {

    const navigate = useNavigate();

    const onOpenSnackBar = () => {
        store.dispatch(openSnackbar('success', '完了しました'));
        navigate('/');
      };

  return (
    <>
    <h1>Mypage</h1>
    <Button variant="contained" onClick={onOpenSnackBar}>スナックバーを表示</Button>
    </>
  )
}

export default Mypage
