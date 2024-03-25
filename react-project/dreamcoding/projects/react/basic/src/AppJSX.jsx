import './App.css';

function App() {
  const name = 'Eunyoung';
  const list = ['딸기','바나나','우유','사과'];
  {}
	return(
		<>
			<h1>{`Hello ${name}`}</h1>
			<h2>Hello</h2>
			<ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
        {`hello ${name}`} 
      </ul>
		</>
		);
}

export default App;
