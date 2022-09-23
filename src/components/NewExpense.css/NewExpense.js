import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  // if (!props.showNewExpense) {
  //   <div className="new-expense">
  //     return ;
  //   </div>;
  // }

  console.log(showExpenseForm);
  return (
    <div className="new-expense">
      showExpenseForm ?
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} /> :{" "}
      <button type="submit">Add New Expense</button>
    </div>
  );
};

export default NewExpense;
