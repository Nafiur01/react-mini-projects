import React, { useEffect, useState } from "react";
import "./scroll.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      if (!response.ok) {
        throw new Error("Could not fetch the response");
      } else {
        setLoading(false);
        const result = await response.json();
        setData(result.products);
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }
  };

  const HandleScrollPercentage = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", HandleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  },[]);

  if(loading){
    return <div>Loading Data...</div>
  }

  if(errorMessage){
    return <div>Error! {errorMessage}</div>
  }

  console.log(data, scrollPercentage);

  return (
    <div className="custom-scroll-indicator">
      <div className="top-container">
        <h2>Custom Scroll Indicator</h2>
        <div className="custom-scroll-tracking-container">
          <div
            className="progress-bar"
            style={{ width: `${scrollPercentage}%`, color: "blue" }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
