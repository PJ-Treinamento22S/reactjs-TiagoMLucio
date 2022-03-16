import React from "react";
import "./App.css";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import AppProvider from "./hooks";

function App() {
    return (
        <AppProvider>
            <div className="App">
                <Header page={"home"}></Header>
                <Wrapper></Wrapper>
            </div>
        </AppProvider>
    );
}

export default App;
