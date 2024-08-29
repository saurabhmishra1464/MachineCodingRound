import React, { useState } from "react";
import "./StopWatch.css";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";
import axios from "axios";
function StopWatch() {
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(true);
	const [time, setTime] = useState(0);

	React.useEffect(() => {
		let interval = null;

		if (isActive && isPaused === false) {
			interval = setInterval(() => {
				setTime((time) => time + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isActive, isPaused]);

	const handleStart = () => {
		setIsActive(true);
		setIsPaused(false);
	};

	const handlePauseResume = () => {
		setIsPaused(!isPaused);
	};

	const handleReset = () => {
		setIsActive(false);
		setTime(0);
	};

	const login = async ()=> {
		try {
		  const response = await axios.post('http://localhost:5001/api/Account/Login', {
			email: "saurabhmishra1464@gmail.com",
			password: "@Sanu12345",
		  },{withCredentials: true});
	  
		  if (response?.status === 200) {
			console.log(response);
			return  "Login Successful" ;
		  } else {
			return { success: false, errors: response.data };
		  }
		} catch (error) {
		  console.log(error);
		//   const message = handleError(error as Error);
		  return error;
		}
	  }

	return (
		<div className="stop-watch">
			<Timer time={time} />
			<ControlButtons
				active={isActive}
				isPaused={isPaused}
				handleStart={handleStart}
				handlePauseResume={handlePauseResume}
				handleReset={handleReset}
				login = {login}
			/>
		</div>
	);
}

export default StopWatch;
