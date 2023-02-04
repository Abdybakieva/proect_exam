import { useContext } from "react";
import { ThemeContext } from "./store/ThemeContext";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const { type } = useContext(ThemeContext);

  console.log(type);

  return (
    <>
      <div className={`${type}`}>
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
