import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatiscLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  let sum = props.good + props.bad + props.neutral
  let average = (1*props.good + (-1)*props.bad) / sum
  let positive = props.good / sum * 100 + "%"
  if (props.good > 0 || props.bad > 0 || props.neutral > 0) {
    return(
      <table>
        <tbody>
          <StatiscLine text="good" value={props.good}/>
          <StatiscLine text="neutral" value={props.neutral}/>
          <StatiscLine text="bad" value={props.bad}/>
          <StatiscLine text="all" value={sum}/>
          <StatiscLine text="average" value={average}/>
          <StatiscLine text="positive" value={positive}/>
        </tbody>
      </table>
    )
  } else {
    return (
      <div>
       No feedback given 
      </div>
    )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
     <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App