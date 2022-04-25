import "./App.css";
import Nav from "./Nav";
import HeroForm from "./HeroForm";
import HeroList from "./HeroList";
import HeroContextProvider from './HeroContext'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <HeroContextProvider>
     <div>
      <Nav />
      <HeroForm />
      <div style={{background: 'crimson' }} className="App">
        <HeroList />
      </div>
    </div>
    </HeroContextProvider>
   
  );
}

export default App;
