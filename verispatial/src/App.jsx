import { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('Home');

  return (
   <div style={{
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw',   
  boxSizing: 'border-box'
}}>
  
  <Header />
      <div style={{ display: 'flex', flex: 1 }}>
       
      </div>

    <div style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
      <ThreeMap />
    </div> 
      
    </div>
  
  );
}

export default App;
