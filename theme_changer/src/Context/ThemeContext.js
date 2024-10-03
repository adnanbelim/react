import React, { createContext, useContext } from "react";

export const themeContext = createContext({
    // variable and function create which we define in app.jsx and use it 
    themeMode: "light",
    dayMode: () => { },
    nightMode: () => { },
})

// wrap using provider
export const ThemeContextProvider = themeContext.Provider;

// use createContext
export default function useTheme() {
    return useContext(themeContext);
}

{/*
    import React: React library ko import kar rahe hain, jo ki components banane ke liye use hoti hai.
    { createContext, useContext }: createContext aur useContext hooks ko import kar rahe hain. Ye hooks context banane aur use karne ke liye hain.
*/}

{/*
createContext({...}): Yahan hum ek context create kar rahe hain. Is context ka initial state ek object hai jisme:
themeMode: "light": Ye batata hai ki default theme "light" hai.
dayMode: () => {}: Ye ek function hai jo day mode ko set karega (abhi empty hai).
nightMode: () => {}: Ye ek function hai jo night mode ko set karega (abhi empty hai).
*/}
{/*
ThemeContextProvider: Ye themeContext.Provider ko export kar raha hai. Ye provider component hoga jo theme context ko children components tak pahunchayega.    
*/}
{/*
useTheme function: Ye ek custom hook hai. Jab bhi aap useTheme ko call karenge, ye useContext(themeContext) ko call karega. Iska matlab hai ki ye theme context ki current value ko return karega.    
*/}





