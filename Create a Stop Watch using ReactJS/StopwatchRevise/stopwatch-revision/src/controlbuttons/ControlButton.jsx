import React from "react";
import "./ControlButton.css";

export default function ControlButton(props) {

    const ActiveButtons = (
        <div className="btn-grp">
            <div className="btn btn-two" onClick={props.PauseResume}>
                {props.isPaused ? "Resume" : "Pause"}
            </div>
            <div className="btn btn-one" onClick={props.reset}>
                Reset
            </div>
        </div>);

    const StartButtons = (
        <div className="btn btn-one" onClick={props.startTimer}>Start</div>
    )


    return (
        <div className="control-buttons">
            {props.isActive ? ActiveButtons : StartButtons}
        </div>
    )



}