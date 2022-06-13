import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css"
import Card from "../UI/Card";


const Expenses = (props) => {

      const [filteredYear, setFilteredYear] = useState('2020');

      const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
      };

      const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
      });
      
     
      return(
        <div>
       
          <Card className="expenses">
            <ExpenseFilter 
              selected={filteredYear}
              onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expense={filteredExpenses}/>
          <ExpensesList items={filteredExpenses}/>  
          
          

          </Card>
        </div>
      );
        
       
   

};

export default Expenses;