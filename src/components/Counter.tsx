import { useState } from 'react';
import styles from './Counter.module.scss';

function Counter() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};
	return (
		<div>
			<h1>{count}</h1>
			<button className={styles.btn} onClick={increment}>
				+
			</button>
			<button className={styles.btn} onClick={decrement}>
				-
			</button>
		</div>
	);
}

export default Counter;
