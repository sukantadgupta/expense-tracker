import React from 'react'
import './ExpenseItem.css'

function ExpenseDetails(props) {
  return (
    <div className='expense-item__description'> 
    <div> <h2>{props.title}</h2>
    <div className='expense-item__place'>{props.place}</div>
    
    <div className='expense-item__price'>${props.amount} </div></div>
    </div>
  )
}

export default ExpenseDetails