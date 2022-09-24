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

    props.onAddExpense(expenseData);

    toggleExpenseForm();
  };
  const toggleExpenseForm = () => {
    setShowExpenseForm((previousState) => {
      return !previousState;
    });
  };

  const cancelHanlder = () => {
    toggleExpenseForm();
  };

  let markup = showExpenseForm ? (
    <ExpenseForm
      onSaveExpenseData={SaveExpenseDataHandler}
      onCancel={cancelHanlder}
    />
  ) : (
    <button type="submit" onClick={toggleExpenseForm}>
      Add New Expense
    </button>
  );

  console.log(showExpenseForm);

  return <div className="new-expense">{markup}</div>;
};

export default NewExpense;
