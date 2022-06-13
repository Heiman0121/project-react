import React, { useState } from 'react';

import ExpensesForm from './ExpensesForm';
import './NewExpenses.css';

const NewExpenses = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enterExpenseData) => {
        const expenseData ={
            ...enterExpenseData,
            id:Math.floor(Math.random()*10000000).toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () =>{
        setIsEditing(true);
    };

    const stopEditingHandler = () =>{
        setIsEditing(false);
    };

  return (
      <div className='new-expense'>
    
    {!isEditing && <button onClick={startEditingHandler}> Add New Expense!</button>}
    
    {isEditing && 
      <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} 
      onCancel = {stopEditingHandler} />}
    </div>
  );
};

export default NewExpenses;