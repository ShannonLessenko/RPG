import CharacterSelection from "./components/CharacterSelection";
import React from "react";
import { app } from "./firebase-config";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <CharacterSelection />
    </div>
  );
}

export default App;