import { useState } from "react"

function App() {
  const [color, setColor] = useState('orange')

  return (
    <div className="w-full h-screen duration-100" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-5">
        <button className="px-4 mx-3 outline-none text-black rounded-xl outline-black bg-white" onClick={() => setColor('white')}>White</button>
        <button className="px-4 mx-3 outline-none text-white rounded-xl outline-black bg-black" onClick={() => setColor('black')} >Black</button>
        <button className="px-4 mx-3 outline-none text-white rounded-xl outline-black" style={{ backgroundColor: 'olive' }} onClick={() => setColor('olive')}>Olive</button>
        <button className="px-4 mx-3 outline-none text-white rounded-xl outline-black" style={{ backgroundColor: 'green' }} onClick={() => setColor('green')}>Green</button>
        <button className="px-4 mx-3 outline-none text-white rounded-xl outline-black" style={{ backgroundColor: 'brown' }} onClick={() => setColor('brown')}>Brown</button>
        <button className="px-4 mx-3 outline-none text-black rounded-xl outline-black" style={{ backgroundColor: 'yellow' }} onClick={() => setColor('yellow')}>Yellow</button>
        <button className="px-4 mx-3 outline-none text-black rounded-xl outline-black" style={{ backgroundColor: 'orange' }} onClick={() => setColor('orange')}>Orange</button>

        <button className="px-4 mx-3 outline-none text-white rounded-xl outline-black" style={{ backgroundColor: 'red' }} onClick={() => setColor('red')}>Red</button>
        <button className="px-4 mx-3 outline-none text-white rounded-xl outline-black" style={{backgroundColor:'blue'}} onClick={() => setColor('blue')}>Blue</button>
        <button className="px-4 mx-3 outline-none text-white rounded-xl outline-black" style={{backgroundColor:'purple'}} onClick={() => setColor('purple')}>Purple</button>
        <button className="px-4 mx-3 outline-none text-black rounded-xl outline-black" style={{backgroundColor:'linen'}} onClick={() => setColor('linen')}>Cream</button>
      </div>
    </div>
  )
}

export default App
