import "./App.css";
import { UserContainer } from "./containers/index";

function App() {
  return (
    <div className="App" data-testid="main-container">
      <UserContainer />
    </div>
  );
}

export default App;
