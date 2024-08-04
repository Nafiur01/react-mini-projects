import React, { useEffect, useState } from "react";

const UseLocalStorage = (Key, DefaultValue) => {
  const [value, setValue] = useState(() => {
    let CurrentValue;

    try {
      CurrentValue = JSON.parse(
        localStorage.getItem(Key) || String(DefaultValue)
      );
    } catch (e) {
      console.log(e);
      CurrentValue = DefaultValue;
    }

    return CurrentValue;
  });

  useEffect(()=>{
    localStorage.setItem(Key,JSON.stringify(value))
  },[Key,value])

  return [value,setValue];
};

export default UseLocalStorage;
