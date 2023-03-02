//import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import AppBar from './Components/AppBar';
import VerticalMenu from './Components/VerticalMenu'
import StartEditButtonGrid from './Components/StartEditButtonGrid';

function App() {
  const menu_content_style = {
    'display' : 'flex',
    'flex-wrap':'nowrap',
    'width' : '100%'
  }

  const getFullStyle = {
    'width' : '92%'
  }

  return (
    <>
    <div id="AppBar"><AppBar title="AppBar"></AppBar></div>
    <div id="NavBar"><NavBar></NavBar></div>
    <div style={menu_content_style}>
      <div id="Menu"><VerticalMenu></VerticalMenu></div>
      <div id="content" style={getFullStyle}><StartEditButtonGrid></StartEditButtonGrid></div>
    </div>
    </>
  );
}

export default App;