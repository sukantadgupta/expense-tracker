
import ExpenseItem from './components/Expenses/ExpenseItem';

const App=()=> {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      place: "Siliguri",
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), 
  
    place: "Erode"
  },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      place: "Jalpaiguri",

    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      place: "Goa",

    },
  ];
  return (
    <div className="App">
      {expenses.map((ele,index)=>
      
      <ExpenseItem
      title = {ele.title}
      amount = {ele.amount}
      date = {ele.date}
      place = {ele.place}

      
      />
      )
    }
      
        

      

 
    </div>
  );
}

export default App;
