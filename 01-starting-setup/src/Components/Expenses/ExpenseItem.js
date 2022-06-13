import React, {useState} from "react";
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');

    const clickq = () => {

        setTitle("Update!!!");
        console.log(title);
    };

    return (
     <li>
        <Card className="expense-item">
        
        <ExpenseDate date = {props.date}/>

            <div className="expense-item__description">
              <h2>{props.title}</h2>
              <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickq}>Try me</button>
        </Card>
     </li>

    );        
}

export default ExpenseItem;
