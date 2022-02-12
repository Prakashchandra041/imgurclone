import { useState, useMemo } from "react";

const slowFunc = (num) => {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

export const Memoization = () => {
    const [num, setNum] = useState(0);
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => {
        return slowFunc(num);
    }, [num]);   // whenever there is change in num then only  function will rerender otherwise it will return value form
                // cache result   memoization is only possible by the help of useMemo()hook, it takes two parameter

    const themeStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };
    return (
        <>
            <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
            <button onClick={() => setDark((dark) => !dark)}>Change theme</button>
            <div style={themeStyle}>{doubleNumber}</div>
        </>
    );
}
