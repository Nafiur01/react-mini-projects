import React, { useState } from "react";
import data from "./data";
import styles from "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const HandleSingleSelection = (dataID) => {
    setSelected(dataID === selected ? null : dataID);
  };

  const HandleMultiSelection = (dataID) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(dataID);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(dataID);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  };

  console.log(selected, multiple);

  console.log(selected);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        enable multi selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => HandleMultiSelection(item.id)
                    : () => HandleSingleSelection(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="content">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="content">{item.answer}</div>
                  )}
              {/* {selected === item.id ? (
                <div className="content">{item.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No question found</div>
        )}
      </div>
    </div>
  );
};
export default Accordion;
