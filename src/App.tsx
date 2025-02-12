// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import axios from 'axios'

// function App() {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get('/api/languages')
//       console.log(response)
//     }

//     fetchData()
//   })

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
//     </>
//   )
// }
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'

const App = () => {
  return (
    <BrowserRouter> 
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
 
  );
};
export default App
