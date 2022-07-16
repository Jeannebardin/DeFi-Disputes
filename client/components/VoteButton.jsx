import React, {useState, useCallback} from "react";

export default function voteButton(props) {
const [count, setCount]=useState(props.voteCount);

    const OnIncrementClick = useCallback(() => {
        setCount(count+1);
      }, [count]);

      const OnDecrementClick = useCallback(() => {
        setCount(count-1);
    }, [count]);
    
    return(
        <div className="MainDiv">
            <div className="ButtonDiv">
                <div onClick={OnIncrementClick} className="ButtonUp"></div>
                <div className="DisplayDiv">
                {count}
                </div>
                <div onClick={OnDecrementClick} className="ButtonDown"></div>
            </div>
        </div>
    )
}
