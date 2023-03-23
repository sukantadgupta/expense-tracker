import React from 'react';

import './ExpenseForm.css';


const ExpenseForm = () => {


    const titleChange=(e)=>{
        console.log(e.target.value)
    
    }
    const amountChange=(e)=>{
        console.log(e.target.value)
    
    }
    const dateChange=(e)=>{
        console.log(e.target.value)
    
    }
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChange}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='1' step='0.01' onChange={amountChange} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2023-01-01' max='2028-12-31' onChange={dateChange}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;