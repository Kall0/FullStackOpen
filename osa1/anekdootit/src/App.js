import { useState } from 'react'

const Header = ({name}) => (<h1>{name}</h1>)

const Button = ({ handleClick, text}) => (<button onClick={handleClick}>{text}</button>)

const Highest = ({anecdotes,taulukko}) => {
 // console.log(anecdotes,taulukko)
  const high = Math.max(...taulukko)
//  console.log(high)
  const index = taulukko.indexOf(high)
  
  if(high == 0){
    return(
      <div></div>
    )
  }
  else{
    return(
    <div>{anecdotes[index]}</div>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]  
  const [taulukko, setTaulukko] = useState(new Uint8Array(7))
  const [selected, setSelected] = useState(0)

  const generaterandom = () => {
    const random = Math.floor(Math.random() * 7)
    setSelected(random)
  }

  const AnecdoteVote = () => {
    const vote = [...taulukko]
    vote[selected] += 1
    setTaulukko(vote)
  }
  return (
    <div>
      <Header name="Anecdote of the day"/>
      <div>{anecdotes[selected]}</div>
      <div>has {taulukko[selected]} votes</div>
      <Button handleClick={generaterandom} text="Give me anecdote" />
      <Button handleClick={AnecdoteVote} text="vote" />
      <Header name="Anecdote with most votes"/>
      <Highest anecdotes={anecdotes} taulukko={taulukko}/>
    </div>
  )
}

export default App