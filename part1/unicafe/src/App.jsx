import { useState } from "react";

const Statistics = (props) => {
	return (
		<div>
			<StatisticsLine text="good" value={props.good} />
			<StatisticsLine text="neutral" value={props.neutral} />
			<StatisticsLine text="bad" value={props.bad} />
			<StatisticsLine
				text="all"
				value={props.good + props.bad + props.neutral}
			/>
			<StatisticsLine
				text="average"
				value={(props.good - props.bad) / (props.good + props.bad)}
			/>
			<StatisticsLine
				text="positive"
				value={`${(props.good / (props.good + props.bad)) * 100}%`}
			/>
		</div>
	);
};

const StatisticsLine = (props) => {
	return (
		<table>
			<tbody>
				<tr>
					<td>{props.text}</td>
					<td>{props.value}</td>
				</tr>
			</tbody>
		</table>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGoodIncrement = () => {
		setGood(good + 1);
	};

	const handleNeutralIncrement = () => {
		setNeutral(neutral + 1);
	};

	const handleBadIncrement = () => {
		setBad(bad + 1);
	};

	if (good === 0 && neutral === 0 && bad === 0) {
		return (
			<div>
				<h1>give feedback</h1>
				<div>
					<button onClick={handleGoodIncrement}>good</button>
					<button onClick={handleNeutralIncrement}>neutral</button>
					<button onClick={handleBadIncrement}>bad</button>
				</div>
				<h1>statistics</h1>
				<p>No feedback given</p>
			</div>
		);
	}

	return (
		<div>
			<h1>give feedback</h1>
			<div>
				<button onClick={handleGoodIncrement}>good</button>
				<button onClick={handleNeutralIncrement}>neutral</button>
				<button onClick={handleBadIncrement}>bad</button>
			</div>
			<h1>statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
