import { useEffect, useState } from 'react'
import AddPerson from './components/AddPerson'
import Persons from './components/Persons'
import Filter from './components/Filter'
import server from './services/server'

const Addedperson = ({message}) => {
  if (message.length === 0) {
    return null
  }

    const addedmessage = {
      color: 'green',
      background: 'lightgrey',
      font_size: 20,
      border_style: 'solid',
      border_radius: 5,
      padding: 10,
      margin_bottom: 10
    }

    return (
      <div style={addedmessage}>
        <b>{message}</b>
      </div>
  )
}

const Deleteperson = ({message}) => {
  if (message.length === 0) {
    return null
  }

    const removedmessage = {
      color: 'red',
      background: 'lightgrey',
      font_size: 20,
      border_style: 'solid',
      border_radius: 5,
      padding: 10,
      margin_bottom: 10
    }

    return (
      <div style={removedmessage}>
        <b>{message}</b>
      </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [added, setAdded] = useState('')
  const [deletemsg, setDeletemsg] = useState('')

  useEffect(() => {
    console.log(`usefffect`)
    server
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const deleteperson = (id) => {
    const person = persons.find(n => n.id === id)
    if (window.confirm(`Delete ${person.name}? `)) {
      server
        .del(id)
        .then(()=>{
          server  
            .getAll()
            .then(persons => {
              setPersons(persons)
            })  
        })
      }    
    }

  const addName = (event) => {
    event.preventDefault()
    const name = {
      name: newName,
      number: newPhone
    }

    const includes = persons.filter(x => (x.name === newName))
    const existingPerson = persons.find(x => x.name === newName)
    const updatePerson = { ...existingPerson, number: newPhone}
    includes.length < 1
    ? server
      .create(name)
      .then(returedpersons => {
        setPersons(persons.concat(returedpersons)
          )
        setAdded(`Added ${newName}`)
        setTimeout(() => {
          setAdded("")
        },5000)
      })
        
    : window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      ? server
          .put(updatePerson.id, updatePerson)
          .then(response => {
            setPersons(persons.map(person => person.id !== updatePerson.id ? person : response))
          })
          .catch(error => {
            setDeletemsg(`Information of ${updatePerson.name} has already been removed from server`)
            server  
            .getAll()
            .then(persons => {
              setPersons(persons)
            }) 
            setTimeout(() => {
              setDeletemsg("")
            },5000)
          })
      : console.log("ei totta")
    setNewName('')
    setNewPhone('')
  }

  const handleNameNoteChange = (event) => setNewName(event.target.value)

  const handelePhoneNoteChange =(event) => setNewPhone(event.target.value)

  const handleFilterChange = (event) => setFilter(event.target.value)
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h3>add new name</h3>
      <Addedperson message={added}/>
      <Deleteperson message={deletemsg} />
      <AddPerson 
        handeleNameNoteChange={handleNameNoteChange}
        handelePhoneNoteChange={handelePhoneNoteChange}
        handleFilterChange={handleFilterChange}
        addName={addName}
        newName={newName}
        newPhone={newPhone}/>
      <h2>Numbers</h2>
       <Persons persons={persons} filter={filter} deleteperson={deleteperson}/>
    </div>
  )
}
export default App