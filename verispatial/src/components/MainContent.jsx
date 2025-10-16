


import React from 'react';
import ThreeMap from './ThreeMap'; 

export default function MainContent({ page }) {
  let content;

 
  switch (page) {
    case 'Home':
      content = (
        <>
          <h2>Home</h2>
          <p>Welcome to VeriSpatial's dashboard. </p>
        </>
      );
      break;
    
    // case '3D Model':
    //   content = (
    //     <div style={{ flex: 1, width: '100%', height: '100%' }}>
    //       <ThreeMap /> 
    //     </div>
    //   );
    //   break;
    
  }

  return (
    <main style={{ flex: 1, padding: '1rem', backgroundColor: '#E8F5E9' }}>
      {content}
    </main>
  );
}
