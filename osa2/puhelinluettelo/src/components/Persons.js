
const Persons = ({persons,filter, deleteperson}) =>
    <div>
        {filter
        ? persons.filter((person) => person.name.includes(filter))
          .map((person) => (
              <p key={person.id}>
                {person.name} {person.number} <button onClick={() => deleteperson(person.id)}> delete</button>
              </p>
          ))
        :persons.map((person) =>
        <div key={person.id}>
        {person.name} {person.number} <button onClick={() => deleteperson(person.id)}> delete</button></div>
        )}
    </div>

export default Persons