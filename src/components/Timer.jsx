import { useEffect, useState } from 'react';
import { convertSecondsToHMS } from '../utils/time.util';

let intervalId;

const Timer = () => {

	const [ elaspedTime, setElapsedTime ] = useState(0);

	useEffect(() => {
		intervalId = setInterval(() => {
			setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
		}, 1000);

		return () => {
			clearInterval(intervalId);
		}
	}, []);

	return (
		<p>{ convertSecondsToHMS(elaspedTime) }</p>
	)
};

export default Timer;