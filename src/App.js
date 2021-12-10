import './App.css';
import MyNav from './components/MyNav'
import Body from './components/Body'
import MyFooter from './components/MyFooter'

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <MyNav />
        <Body />
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
