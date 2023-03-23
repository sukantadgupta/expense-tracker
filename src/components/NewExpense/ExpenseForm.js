import React, {useState} from 'react';

import './ExpenseForm.css';


const ExpenseForm = (props) => {
    
    const[enteredTitle,SetEnteredTitle] = useState("");
    const[enteredAmount ,SetEnteredAmount] = useState("");

    const[enteredDate,SetEnteredDate] = useState("");



    const titleChange=(e)=>{
        SetEnteredTitle(e.target.value)
    
    }
    const amountChange=(e)=>{
        SetEnteredAmount(e.target.value)
    
    }
    const dateChange=(e)=>{
        SetEnteredDate(e.target.value)
    
    }

    const submitExpense=(e)=>{
        e.preventDefault();

        const expenseData = {
           title: enteredTitle,
        amount :enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        SetEnteredAmount("");
        SetEnteredTitle("");
        SetEnteredDate("");



        // console.log(expenseData);
    
    }


    
  return (
    <form onSubmit={submitExpense}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChange}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='1' step='0.01' value={enteredAmount} onChange={amountChange} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2023-01-01' max='2028-12-31' value={enteredDate} onChange={dateChange}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit' >Add Expense</button>
      </div>
    </form >
  );
};

export default ExpenseForm;