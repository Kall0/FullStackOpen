const Filter = ({handleFilterChange, filter}) => {
    return (
      <form>
        <div>
          filter with name: <input value={filter} onChange={handleFilterChange}/>
        </div>
      </form>
    )
  }

export default Filter