/* eslint-disable react/prop-types */
import { createContext } from "react";

export const TimerContext = createContext();

export default function TimerProvider({ children, value }) {
    return (
        <TimerContext.Provider value={value}>
            { children }
        </TimerContext.Provider>
    );
}