
import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}
  // const [title, setTitle] = useState(props.title);
  // const [amount,setAmount] = useState(props.amount);
  // console.log('ExpenseItem evaluated by React');
  
  // const clickHandler = () => {
  //   setTitle('Updated!');
  //   console.log(title);
  // };

  // const ChangeAmount = () => {
  //   setAmount('100');
  //   console.log(amount);
  // }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__place'>{props.place}</div>
        <div className='expense-item__price'>${props.amount}</div>
        {/* <button onClick={ChangeAmount}>Change Amount</button> */}
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;