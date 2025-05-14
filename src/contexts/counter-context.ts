import { createContext, useContext } from "react";

type CounterContextType = {
    counter: number,
    increment: () => void,
    decrement: () => void,
}

const CounterContext = createContext<CounterContextType>(null!);

const useCounterContext = () => useContext(CounterContext);

export { CounterContext as default, useCounterContext };