import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function TypeWrite() {
  const [text] = useTypewriter({
    words: ['a MERN Stack Developer.','a React Developer.','a Professional Coder.'],
    loop: 0,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })

  return (
    <div className='App'>
      <h1 style={{color:'white',marginLeft:'1rem'}}>{text}</h1>
      <Cursor cursorColor='red' />
    </div>
  )
}