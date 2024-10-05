import { motion } from "framer-motion"
import { useState, useEffect } from "react"

function App() {
  const [dotCount, setDotCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  const backgroundImagePath = '../public/background.svg'

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-white text-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImagePath})` }}
    >
      <h1 className="text-4xl font-bold mb-2 flex items-baseline">
        <img
          src="/hammer.svg"
          alt="Hammer and Wrench"
          className="w-10 h-10 mr-2"
        />
        Still Building
        <span className="inline-flex ml-2">
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              className="inline-block w-2 h-2 mx-0.5 bg-black rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: index < dotCount ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </span>
      </h1>
      <div className="w-16 h-0.5 bg-black mb-8"></div>
      <p className="text-xl font-semibold mb-8">
        Until then, maybe say <span className="text-blue-500">hello</span> ?
      </p>
      <div className="flex flex-col sm:flex-row items-baseline space-y-4 sm:space-y-0 sm:space-x-6">
        <a href="https://x.com/withadityya" className="flex items-center text-gray-700 hover:text-black">
          <img src="/xlogo.svg" alt="Twitter" className="w-6 h-6 mr-2" />
          <span>heyadixyz</span>
        </a>
        <a href="https://linkedin.com/in/withadityya" className="flex items-center text-gray-700 hover:text-black">
          <img src="/linkedinlogo.svg" alt="LinkedIn" className="w-6 h-6 mr-2" />
          <span>heyadixyz</span>
        </a>
        <a href="https://github.com/withadityya" className="flex items-center text-gray-700 hover:text-black">
          <img src="/githublogo.svg" alt="GitHub" className="w-6 h-6 mr-2" />
          <span>heyadixyz</span>
        </a>
      </div>
    </div>
  )
}

export default App