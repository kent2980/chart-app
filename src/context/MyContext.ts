t// MyContext1.ts
import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

interface MyContext1Value {
    state1: string;
    setState1: Dispatch<SetStateAction<string>>;
}

const MyContext = createContext<MyContext1Value | undefined>(undefined);

export function MyProvider1({ children }: { children: ReactNode }) {
    const [state1, setState1] = useState<string>(initialState1);

    const contextValue: MyContext1Value = {
        state1,
        setState1,
    };

    return <MyContext.Provider value={ contextValue }> { children } < /MyContext.Provider>;
}

export function useMyContext1() {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext1 must be used within a MyProvider1');
    }
    return context;
}
