import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense.css/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [year, setYear] = useState("");
  // const [showNewExpense, setShowNewExpense] = useState(false);

  // const onAddExpenseHandler = (newExpense) => {
  //   setExpenses((previousExpense) => {
  //    return [
  //       ...previousExpense,
  //       newExpense
  //     ]
  //   })
  // }

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };
  const yearChangeHandler = (newYear) => {
    setYear(newYear);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        year={year}
        expenses={expenses}
        onDateChange={yearChangeHandler}
      />
    </div>
  );
};

export default App;
