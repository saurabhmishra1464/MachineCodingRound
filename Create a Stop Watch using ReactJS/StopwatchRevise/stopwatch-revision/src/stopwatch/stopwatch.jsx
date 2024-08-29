import { useEffect, useState } from 'react';
import './stopwatch.css';
import Timer from '../Timer/Timer';
import ControlButton from '../controlbuttons/ControlButton';

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setPause] = useState(true);
   
    useEffect(() => {
        let interval = null;
        if(isActive && isPaused===false){
        interval = setInterval(() => {
            setTime(time => time + 10);
        }, 10)
    }else{
        console.log("first called else");
        clearInterval(interval);
    }
    return () => {
        console.log("called return");
        clearInterval(interval);
    };
    }, [isActive,isPaused])

    function startTimer(){
    setPause(false);
    setIsActive(true);
    }

    function PauseResume(){
        setPause(!isPaused);
    }

    function reset(){
        setIsActive(false);
        setTime(0);
    }
    
    return (
        <div className="stopwatch">
            <Timer time={time} />
            <ControlButton
            isActive = {isActive}
            isPaused = {isPaused}
            startTimer = {startTimer}
            PauseResume = {PauseResume}
            reset = {reset}
            />
        </div>
    );

    
}