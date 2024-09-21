import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {

    const [advice, setAdvice] = useState("");
    const [count, setCount] = useState(0);
    async function getAdvice() {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c) => c + 1)
    }

    useEffect(() => {
        getAdvice();
    }, []);

    function Message(props) {
        return (
            <p>
                You have read <strong>{props.count}</strong> pieces of advice
            </p>
        )
    }

    return (
        <>
            <div className={"App"}>
                <h1>Hello React Course!</h1>
                <h2>{advice}</h2>
                <button onClick={getAdvice}>Get advice</button>
                <Message count = {count} />
            </div>
        </>
    )
}

