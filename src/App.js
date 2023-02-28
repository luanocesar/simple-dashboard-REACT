//import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import AppBar from './Components/AppBar';
import VerticalMenu from './Components/VerticalMenu'

function App() {
  return (
    <>
      <AppBar title="AppBar"></AppBar>
      <NavBar></NavBar>
      <VerticalMenu></VerticalMenu>
    </>
  );
}

export default App;