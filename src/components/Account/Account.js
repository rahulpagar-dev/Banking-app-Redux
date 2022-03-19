import React, { useEffect, useState } from 'react'
import "./Account.css"
import {depositAmount,withdraAmount} from "../Redux/Actions"
import { useDispatch, useSelector } from 'react-redux'
function Account() {
  const dispatch=useDispatch();
  const[Amount,setAmount]=useState(null);
  let money=useSelector((state)=>state.balance);
  useEffect(()=>{
    console.log(money);
  },[money])

  function WithdrawHandler(){
    if(money>=Amount){
      return dispatch(withdraAmount(-Amount))
    }
    else{
      alert("Insuffecient Funds")
    }
  }
  
  return (
      <div className='Gcontainer'>
    <div className='ParentContainer'>
      <h1 className='title is-1'>Account Balance</h1>
      <h2> Current Account Bal:<strong>{money}</strong></h2>
      <div className='mt-5 px-5'>
      <input type="text" className='input is-primary' id="Acc" placeholder='Enter Amount' onChange={(e)=>{setAmount(e.target.value)}}/>
      </div>
      <div className='mt-5'>
          <button className='button is-success is-light mr-2'onClick={()=>{dispatch(depositAmount(+Amount))}}> DEPOSIT </button>
          <button className='button is-primary mr-2' onClick={WithdrawHandler}> WITHDRAW</button>
          <button className='button is-link mr-2'>INTEREST</button>
          <button className='button is-primary mr-2'>SWITCH Account</button>
      </div>
    </div>
    </div>
  )
}

export default Account
