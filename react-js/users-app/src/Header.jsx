import { memo } from "react";

function Header() {
  console.log("header");
  return <h2>User Form </h2>;
}

export default memo(Header);

// cache a component => memo ( HOC )
// a value => useMemo
// a function => useCallback

// HOF =>
// function add(callback){
//     return ()=>{

//     }
// }

// Array.map(()=>{

// })
