const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    <p>{props.part1} {props.units1}</p>
    <p>{props.part2} {props.units2}</p>
    <p>{props.part3} {props.units3}</p>
  </div>
)

const Total = (props) => <p>Number of units {props.total}</p>

const App = () => {
  const course = 'Bachelor of Science in Information Technology'
  const part1 = 'Data Structures and Algorithms'
  const units1 = 3
  const part2 = 'Web Systems and Technologies'
  const units2 = 3
  const part3 = 'Discrete Mathematics'
  const units3 = 3

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} units1={units1}
        part2={part2} units2={units2}
        part3={part3} units3={units3}
      />
      <Total total={units1 + units2 + units3} />
    </div>
  )
}

export default App