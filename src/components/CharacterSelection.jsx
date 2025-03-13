import { useState } from "react";

const characters = [
  { 
    name: "Lhyan", 
    imgDefault: "/imagens/anjo.png",
    imgSelected: "/imagens/ficha-lyhan.jpeg",
    password: "1234"
  },
  { 
    name: "Kang", 
    imgDefault: "/imagens/lobo.png",
    imgSelected: "/imagens/ficha-kang.jpeg",
    password: "abcd"
  },
  { 
    name: "Suko", 
    imgDefault: "/imagens/rato.png",
    imgSelected: "/imagens/ficha-suko.jpeg",
    password: "5678"
  },
  { 
    name: "Claire Frazer", 
    imgDefault: "/imagens/eu.png",
    imgSelected: "/imagens/ficha-claire.jpeg",
    password: "xyz"
  },
  { 
    name: "Boss", 
    imgDefault: "/imagens/boss.png",
    imgSelected: "",
    password: "admin"
  }
];

export default function CharacterSelection() {
  const [selected, setSelected] = useState(null);
  const [inputPassword, setInputPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [characterData, setCharacterData] = useState({});

  const handleSelectCharacter = (char) => {
    setSelected(char);
    setInputPassword("");
    setIsAuthenticated(false);
    setError(false);
  };

  const handleVerifyPassword = () => {
    if (inputPassword === selected.password) {
      setIsAuthenticated(true);
      setCharacterData((prevData) => ({ ...prevData, [selected.name]: prevData[selected.name] || {} }));
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  const handleGoBack = () => {
    setSelected(null);
    setIsAuthenticated(false);
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-violet-500">
      {!selected ? (
        <>
          <h1 className="text-2xl font-bold mb-4 text-white">Quem é você?</h1>
          <div className="character-container">
            {characters.map((char, index) => (
              <div
                key={index}
                className="character-box transition-transform transform hover:scale-105 active:scale-95"
                onClick={() => handleSelectCharacter(char)}
              >
                <img src={char.imgDefault} alt={char.name} className="character-image" />
                <p className="character-name">{char.name}</p>
              </div>
            ))}
          </div>
        </>
      ) : !isAuthenticated ? (
        <>
          <h1 className="text-2xl font-bold mb-4 text-white">Digite a senha para acessar</h1>
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            className={`password-input ${error ? "animate-shake border-red-500" : ""}`}
            placeholder="Digite a senha"
          />
          {error && <p className="text-red-500 mt-2">Senha incorreta. Tente novamente.</p>}
          <button onClick={handleVerifyPassword} className="password-button">
            Acessar
          </button>
          <button onClick={handleGoBack} className="back-button">Voltar</button>
        </>
      ) : selected.name === "Boss" ? (
        <div className="character-sheet-container flex flex-col items-center">
          <h1 className="character-title">Administrador (Boss)</h1>
          <div className="flex flex-row flex-wrap gap-4 justify-center">
            {characters.filter(c => c.name !== "Boss").map((char, index) => (
              <div key={index} className="sheet-wrapper flex flex-col items-center">
                <h2 className="text-white">{char.name}</h2>
                <img src={char.imgSelected} alt={char.name} className="character-sheet" />
                {Object.keys(characterData[char.name] || {}).map((key) => (
                  <input
                    key={key}
                    className={`input ${key}`}
                    value={characterData[char.name][key] || ""}
                    onChange={(e) => setCharacterData({...characterData, [char.name]: {...characterData[char.name], [key]: e.target.value}})}
                  />
                ))}
              </div>
            ))}
          </div>
          <button onClick={handleGoBack} className="back-button">Voltar</button>
        </div>
      ) : (
        <div className="character-sheet-container">
          <h1 className="character-title">{selected.name}</h1>
          <div className="sheet-wrapper">
            <img src={selected.imgSelected} alt={selected.name} className="character-sheet" />
            {Object.keys(characterData[selected.name] || {}).map((key) => (
              <input
                key={key}
                className={`input ${key}`}
                value={characterData[selected.name][key] || ""}
                readOnly
              />
            ))}
          </div>
          <button onClick={handleGoBack} className="back-button">Voltar</button>
        </div>
      )}
    </div>
  );
}
