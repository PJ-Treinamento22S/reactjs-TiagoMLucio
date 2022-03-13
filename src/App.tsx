import React from "react";
import "./App.css";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

function App() {
    return (
        <div className="App">
            <Header page={"home"}></Header>
            <Wrapper></Wrapper>
        </div>
    );
}

export default App;
