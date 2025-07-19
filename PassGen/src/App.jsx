import { useState, useCallback, useEffect, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null);

  const generatePassword = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) str += "0123456789";
    if (character) str += "!@#$%&*";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(password);
  }, [length, number, character]);

  const copyPassword = () => {
    passRef.current?.select();
    navigator.clipboard.writeText(password);
    toast.success("Password Copied!");
  };

  useEffect(() => {
    generatePassword();
  }, [length, number, character]);

  return (
    <>
      <Toaster position="bottom-center" />
      <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-blue-900 to-black text-white font-sans px-4">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-white drop-shadow-sm">
            Password Generator 🔐
          </h1>

          <div className="flex w-full">
            <input
              type="text"
              value={password}
              ref={passRef}
              readOnly
              className="flex-1 p-3 rounded-l-lg text-lg text-black outline-none bg-white/90"
            />
            <button
              onClick={copyPassword}
              className="px-4 py-3 bg-purple-600 hover:bg-purple-700 active:scale-95 transition rounded-r-lg font-medium"
            >
              Copy
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={4}
                max={20}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <span className="w-[60px] text-right">Len: {length}</span>
            </div>

            <div className="flex items-center gap-3">
              <input
                id="number"
                type="checkbox"
                checked={number}
                onChange={() => setNumber((prev) => !prev)}
                className="accent-purple-500 w-5 h-5"
              />
              <label htmlFor="number" className="text-sm">
                Include Numbers
              </label>
            </div>

            <div className="flex items-center gap-3">
              <input
                id="character"
                type="checkbox"
                checked={character}
                onChange={() => setCharacter((prev) => !prev)}
                className="accent-purple-500 w-5 h-5"
              />
              <label htmlFor="character" className="text-sm">
                Include Special Characters
              </label>
            </div>
          </div>

          <div className="text-xs text-center text-white/60 pt-2">
            Generated password updates automatically 🔁
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
