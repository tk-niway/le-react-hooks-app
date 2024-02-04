import React from "react";

export default function App() {
  console.log("render App");

  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const double = (count) => {
    let i = 0;
    while (i < 1000000000) i++;
    return count * 2;
  };
  
  const Counter= React.useMemo(()=>{
    console.log("render Counter")
    const doubledCount = double(count2);

    return (
      <p>
        Counter: {count2},{doubledCount}
      </p>
    )
  },[count2])

  // const doubledCount = React.useMemo(() => double(count2), [count2]);

  return (
    <>
      <h2>Increment(fast)</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment(fast)</button>

      <h2>Increment(slow)</h2>
      {Counter}
      {/* <p>
        Counter: {count2}, {doubledCount}
      </p> */}
      <button onClick={() => setCount2(count2 + 1)}>Increment(slow)</button>
    </>
  );
}

// // useCallbackの使い方
// import React from "react";

// const Child = React.memo(({handleClick})=>{
//   console.log("render Child");
//   return <button onClick={handleClick}>Child</button>
// })

// export default function App(){
//   console.log("render App");

//   const [count,setCount] = React.useState(0);

//   const handleClick = React.useCallback(()=>{console.log("click")},[])

//   return (
//     <>
//       <p>Counter: {count}</p>
//       <button onClick={()=>setCount(count+1)}>Increment count</button>
//       <Child handleClick={handleClick}/>
//     </>
//   )
// }
// // React.memoを子要素で使う方法
// import React, { useState, useEffect, useRef } from "react";

// const Child = React.memo(() => {
//   console.log("render Child");
//   return <p>Child</p>;
// });

// export default function App() {
//   console.log("render App");

//   const [timeLeft, setTimeLeft] = useState(100);

//   const timerRef = useRef(null);

//   const timeLeftRef = useRef(timeLeft);

//   useEffect(() => {
//     timeLeftRef.current = timeLeft;
//   }, [timeLeft]);

//   const tick = () => {
//     if (timeLeftRef.current === 0) {
//       window.clearInterval(timerRef.current);
//       return;
//     }
//     setTimeLeft((prevTime) => prevTime - 1);
//   };

//   const start = () => {
//     timerRef.current = setInterval(tick, 10);
//   };

//   const reset = () => {
//     clearInterval(timerRef.current);
//     setTimeLeft(100);
//   };

//   return (
//     <>
//       <button onClick={start}>start</button>
//       <button onClick={reset}>reset</button>
//       <p>App: {timeLeft}</p>
//       <Child />
//     </>
//   );
// }

//// React.memoの使い方
// import React, { useState } from "react";
// // import logo from "./logo.svg";
// import "./App.css";

// const Child = React.memo(({ count }: { count: number }) => {
//   console.log("render Child");
//   return <p>Child: {count}</p>;
// });

// export default function App() {
//   console.log("render App");
//   const [count1, setCount1] = useState<number>(0);
//   const [count2, setCount2] = useState<number>(0);

//   return (
//     <>
//       <button onClick={() => setCount1(count1 + 1)}>count up App count</button>
//       <button onClick={() => setCount2(count2 + 1)}>
//         count up Child count
//       </button>
//       <p>App: {count1}</p>
//       <Child count={count2} />
//     </>
//   );
// }
