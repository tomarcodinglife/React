import { useState } from "react";

function useCounter(initialValue = 0, ration = 1){
    const [count, setCount] = useState(initialValue)

    const increment = () => setCount((prev)=>prev + ration)
    const decrement = () => setCount((prev)=>prev - ration)
    const reset = () => setCount(initialValue)

    return {count, increment, decrement, reset};

}

export default useCounter;