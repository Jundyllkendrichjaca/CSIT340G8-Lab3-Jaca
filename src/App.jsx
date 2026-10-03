const Header = ({ course }) => (
  <h1 style={{ margin: 0, fontSize: '2rem', color: '#1e293b' }}>{course}</h1>
)

const Part = ({ part }) => (
  <p style={{ margin: '0.5rem 0', padding: '0.75rem 1rem', background: '#f1f5f9', borderRadius: '8px', color: '#334155' }}>
    {part.name} - {part.units} units
  </p>
)

const Content = ({ parts }) => (
  <div style={{ marginTop: '1.5rem' }}>
    <Part part={parts[0]} />
    <Part part={parts[1]} />
    <Part part={parts[2]} />
  </div>
)

const Total = ({ parts }) => (
  <p style={{ marginTop: '1rem', fontWeight: 'bold', color: '#4f46e5' }}>
    Total units: {parts[0].units + parts[1].units + parts[2].units}
  </p>
)

const Footer = ({ fullName, courseCode, section }) => (
  <footer style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '2px solid #e2e8f0', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>
    {fullName} - {courseCode} - {section}
  </footer>
)

const App = () => {
  const course = {
    name: 'Web Systems and Technologies',
    parts: [
      { name: 'Data Structures and Algorithms', units: 3 },
      { name: 'Discrete Structures', units: 3 },
      { name: 'Networking2', units: 1 },
    ],
  }

  const fullName = 'Jundyll Kendrich Jaca'
  const courseCode = 'CSIT340'
  const section = 'G8'

  return (
    <div style={{ maxWidth: '480px', margin: '3rem auto', padding: '2rem', background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontFamily: 'sans-serif' }}>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer fullName={fullName} courseCode={courseCode} section={section} />
    </div>
    
  )
}


export default App