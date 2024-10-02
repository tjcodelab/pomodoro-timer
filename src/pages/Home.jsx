import { useState } from "react";
import Navbar from "../components/layouts/Navbar";
import PomodoroTabs from "../components/PomodoroTabs";
import TimerProvider from "../context/TimerContext";

export default function HomePage() {
    const [counter, setCounter] = useState(1);
    const [isStart, setIsStart] = useState(false);
    const [timerSettings, setTimerSettings] = useState({
        pomodoro: 1,
        shortBreak: 1,
        longBreak: 1,
    });

    return (
        <TimerProvider value={{
            counter,
            setCounter,
            isStart,
            setIsStart,
            timerSettings,
            setTimerSettings
        }}>
            <Navbar />
            <main>
                <section>
                    <div className="px-8 py-4 flex justify-center">
                        <PomodoroTabs />
                    </div>
                </section>
            </main>
        </TimerProvider>
    );
}