import { useState, useEffect, useRef } from 'react'

function ExpenseForm({ onAddExpense }) {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const titleRef = useRef();

    // Function to add new expense and pass to onAddExpense() function
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title || !amount) return alert("Please fill all fields!")

        const newExpense = {
            id: Date.now(),
            title,
            amount: parseFloat(amount)
        } 
        
        onAddExpense(newExpense)
        setTitle("")
        setAmount("")
        titleRef.current.focus();
    }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
        <div className="form-control">
        <input 
            placeholder="Expense Title" 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            ref={titleRef}
            className='expense-input'
        /> <br />
        <input 
            placeholder="Amount ₹" 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
            className='expense-input'
        />
        <br />
        <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm