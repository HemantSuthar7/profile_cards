import './App.css';
import Header from './components/Header';
import Profile_card_section from "./components/Profile_card_section"
import Consideration from './components/Consideration';
import Connect_btn from './components/Connect_btn';
import Resume_section from './components/Resume_section';

function App() {
  return (
    <div className="App">
      <Header/>
      <Profile_card_section/>
      <Consideration/>
      <Connect_btn/>
      <Resume_section/>
    </div>
  );
}

export default App;
