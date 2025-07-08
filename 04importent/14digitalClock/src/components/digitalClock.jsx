import React, { useState, useEffect } from 'react';

const DigitalClock = ({propColor="red"}) => {
    const currentTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(currentTime);

    const updateTime = (()=>{
        setInterval(() => {
            const newTime = new Date().toLocaleTimeString();
            setTime(newTime);
        }, 1000);

        return () => clearInterval(updateTime);
    })

    useEffect(updateTime, [1000]);

    return (
        <div>
            <h2 style={{color:propColor,}}>{time}</h2>
        </div>
    )
}

export default DigitalClock;