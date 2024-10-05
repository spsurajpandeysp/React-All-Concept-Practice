import { useState,useEffect } from "react";

function ClockTime(){
    const [time,setTime] = useState(new Date());
    // useEffect cleanUp program
    useEffect(() => {
        const intervalid = setInterval(() => {
            setTime(new Date());
        },1000);

        return () => {
            clearInterval(intervalid);
            console.log('cancel interval');
        }
    },[])

    return <p>This is the current Time {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}
export default ClockTime;

