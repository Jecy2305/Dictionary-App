import React from "react";
import Header from "./Components/Header";
import Dictionary from "./Components/Dictionary";
import { DictionaryProvider } from "./Context/DictionaryContext";

function App() {

  return (
    <DictionaryProvider>
      <Header />
      <Dictionary/>
    </DictionaryProvider>
  );
}

export default App;
