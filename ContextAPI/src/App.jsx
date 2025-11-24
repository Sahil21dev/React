import Button from "./components/Button"
import { useContext } from 'react'
import { CounterContext } from "./context/CounterContext";
export default function App() {
  const countContext = useContext(CounterContext);
  return (
    <div className="flex justify-center items-center h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div>
      <h1 className="text-6xl font-bold text-white drop-shadow-lg mb-2">
        Context API
      </h1>
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">The Current Count is {countContext.count}</h2>
      <Button />
      <Button />
      <Button />
      <Button />
      </div>
    </div>
  )
}
