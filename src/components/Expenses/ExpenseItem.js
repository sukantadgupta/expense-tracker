import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';


const ExpenseItem = (props) => {

  const handleDelete = () => {
    const expenseItem = document.querySelector('.expense-item');
    expenseItem.parentNode.removeChild(expenseItem);
  };
 
  return (
   

      <div className='expense-item'>

<ExpenseDate date ={props.date} />

<ExpenseDetails amount={props.amount}  place={props.place}   title={props.title} />
<button onClick={handleDelete}>Delete Expense</button>





        </div>
  )
}

export default ExpenseItem