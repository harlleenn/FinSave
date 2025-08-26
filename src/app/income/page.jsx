"use client"
import { useState } from "react";
// import MyBarChart from "../components/barChart/MyBarChart";
import CardLayout from "../components/cardLayout/CardLayout";
export default function Income () {
    const [amount, setAmount] = useState(0)
    const [source , setSource ] = useState([])
    const handleFunctions = () => {
        setAmount(amount)
        setSource(source)
    }

    return (
        <>
        <CardLayout Header="this month income" Body={`Rs ${amount}`}/>
        <CardLayout Header="this year income"   Body="Rs 700000"/>
        {/* the income will chnage with time or input  */}
            {/* <MyBarChart/> */}
            <div className="bg-pink-800 flex justify-center p-3">
                   <input placeholder="Enter amount" 
                   value={amount}
                   onChange={(e) => setAmount(e.target.value)}/>
                    <input placeholder="Enter date"/>
                    <input placeholder="Enter source"
                     value={source}
                   onChange={(e) => setSource(e.target.value)}
                    
                    />
                    <button onClick={() => handleFunctions()}>Save </button>
                    <br></br>
            {
                source && <>
                {source}
                </>
            }
            </div>
     

        </>
    )
}
