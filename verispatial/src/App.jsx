import { useState } from 'react';
<<<<<<< HEAD
=======
import Header from './components/Header';
import MainContent from './components/MainContent';
>>>>>>> Robyn
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
<<<<<<< HEAD
       
      </div>

    <div style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
      <ThreeMap />
    </div> 
=======
        <Sidebar setPage={setPage} />
        <MainContent page={page} />
      </div>
    
    <div style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
      <ThreeMap />
    </div>
>>>>>>> Robyn
      
    </div>
  
  );
}

export default App;
