import { useContext } from "react";
import { TimerContext } from '../context/TimerContext';

export default function Counter() {
    const { counter } = useContext(TimerContext);
    return <p className="text-center mt-2">{`#${counter}`}</p>;
}