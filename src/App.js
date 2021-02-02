import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";

import logo from "./img/netflix-logo.png";

function App() {
    return (
        <div className="App">
            <Header pic={logo} />
            <Section />
        </div>
    );
}
export default App;
