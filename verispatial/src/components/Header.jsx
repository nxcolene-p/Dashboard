import logo from '/logoverispatial.png';


export default function Header() {
  return (
    // Header.jsx
<header style={{ height: '120px',  padding: '2rem', backgroundColor: '#ffffffff', color: '#487651ff', fontSize: '1.5rem',
        fontWeight: 'bold', width: '100%', boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: '1rem'}}>
  <h1>VeriSpatial</h1>
  <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',}}>
        <img src={logo} alt="/logoverispatial.png" style={{ width: '38%', objectFit: 'contain', marginLeft: '2rem', }} />
      </div>
      <span
        style={{
          fontSize: '2rem',
          fontWeight: 'normal',
          fontStyle: 'italic',
          color: '#569877ff',
          marginLeft: '-16rem'
        }}
      >
        "Truth in Every Layer"
      </span>
</header>

  );
}
