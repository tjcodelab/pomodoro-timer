/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Button from "./ui/Button/Button";
import { TimerContext } from '../context/TimerContext';

const audio = new Audio('/assets/audio/alert.mp3');

export default function Timer({ activeTab, setActiveTab }) {
    const { isStart, setIsStart, timerSettings, counter, setCounter } = useContext(TimerContext);

    let totalMinutes = timerSettings.pomodoro;
    if(activeTab === 1) {
        totalMinutes = timerSettings.shortBreak;
    } else if(activeTab === 2) {
        totalMinutes = timerSettings.longBreak;
    }

    const [time, setTime] = useState(totalMinutes * 60);
    const [isPlay, setIsPlay] = useState(false);

    console.log('render timer');

    useEffect(() => {
        let timerId;

        if(isPlay) {
            timerId = setInterval(() => {
                setTime((prevTime) => {
                    if(prevTime > 0) {
                        return prevTime - 1;
                    } else {
                        if (!isStart) {
                            setIsStart(true);
                            setActiveTab(activeTab >= 1 ? 0 : (activeTab + 1));
                        } else {
                            if(counter % 4 === 0) {
                                setActiveTab(activeTab === 0 ? 2 : 0);
                            } else {
                                setActiveTab(activeTab === 0 ? 1 : 0);
                            }

                            if(activeTab !== 0) {
                                setCounter(counter + 1);
                            }
                        }
                        audio.play();
                        clearInterval(timerId);
                        return 0;
                    }
                });
            }, 1000);
        }
    
        return () => clearInterval(timerId);
    }, [isPlay, isStart, setIsStart, activeTab, setActiveTab, counter, setCounter]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    // Format the time with leading zeros if necessary
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    const handleStartButton = () => {
        setIsPlay(!isPlay);
    }

    return (
        <>
            <p className="font-bold text-2xl text-center">{formattedMinutes}:{formattedSeconds}</p>
            <Button className="bg-teal-500 hover:bg-teal-600 mt-4 text-center" onClick={handleStartButton}>{ isPlay ? 'Pause' : 'Start' }</Button>
        </>
    );
}