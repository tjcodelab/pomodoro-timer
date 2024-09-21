/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "./ui/Button/Button";

export default function Timer({ totalMinutes }) {
    const [time, setTime] = useState(totalMinutes * 60);
    const [isPlay, setIsPlay] = useState(false);

    console.log('render timer');

    useEffect(() => {
        let timerId;

        if(isPlay) {
            timerId = setInterval(() => {
                setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
            }, 1000);
        }
    
        return () => clearInterval(timerId);
    }, [isPlay]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    // Format the time with leading zeros if necessary
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <>
            <p className="font-bold text-2xl text-center">{formattedMinutes}:{formattedSeconds}</p>
            <Button className="bg-teal-500 hover:bg-teal-600 mt-4" onClick={() => setIsPlay(!isPlay)}>{ isPlay ? 'Pause' : 'Start' }</Button>
        </>
    );
}