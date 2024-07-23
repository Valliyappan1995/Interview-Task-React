import React, { useEffect, useState } from "react";

const withTimer = (WrappedComponent) => {
  return (props) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return <WrappedComponent {...props} seconds={seconds} />;
  };
};

export default withTimer;
