import { useState } from "react";
import "./ToggleSwitch.css";
import { BsToggles } from "react-icons/bs";

export const ToggleSwitch = () => {
    const [isOn, setIson] = useState(false);

    const handleToggleSwitch = () => {
        setIson(!isOn);
    }

    const checkIsOn = isOn ? "on" : "off";

    return(
        <>
        <BsToggles />
        <div className="toggle-switch" style={{backgroundColor: isOn ? "#4caf50" : "red"}} onClick={handleToggleSwitch}>
              <div className={`switch ${checkIsOn}`}>
                <span className="switch-state">{checkIsOn}</span>
            </div>
        </div>
        </>
    )
}