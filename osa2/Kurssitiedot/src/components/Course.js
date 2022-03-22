const Header = ({ name }) => {
    return (
      <h2>{name}</h2>
    )
  }
  
  const Parts = ({ parts }) => {
    return (
      <li>{parts.name} {parts.exercises}</li>
    )
  }
  
  const Sum = ({parts}) => {
    const exercises = parts.map((part) => part.exercises)
    const totalSum = exercises.reduce((sum, exercises) => sum + exercises, 0)
    return (
        <b>total of {totalSum} exercises</b>
    )
  }
  
  const Course = ({ course }) => {
    const parts = course.parts
    return (
      <div>
        <Header name={course.name} />
        <ul>
          {parts.map(parts =>
            <Parts key={parts.id} parts={parts} />
          )}
        </ul>
        <Sum parts={parts} />
      </div>
    )
  }

export default Course