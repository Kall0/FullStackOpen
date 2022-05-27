const AddPerson = ({handeleNameNoteChange, handelePhoneNoteChange, newName, newPhone, addName}) =>
    <form onSubmit={addName}>
        <div>
            name: <input value={newName} onChange={handeleNameNoteChange}/>
        </div>
        <div>  
            number: <input value={newPhone} onChange={handelePhoneNoteChange}/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>

export default AddPerson