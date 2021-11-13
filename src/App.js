import React, { useRef, useEffect, useState } from "react"

function App() {

  const box1ref = useRef(null)
  const box2ref = useRef(null)
  const [ BoxOneIsVisible, setBoxOneIsVisible ] = useState(false)
  const [ BoxTwoIsVisible, setBoxTwoIsVisible ] = useState(false)

  const callbackFunction1 = (entries) => {
    const [ entry ] = entries
    setBoxOneIsVisible(entry.isIntersecting)
  }
  const callbackFunction2 = (entries) => {
    const [ entry ] = entries
    setBoxTwoIsVisible(entry.isIntersecting)
  }
  const options = {
    root: null,
    rootMargin: "0px",
    threshold:1.0
  }

  useEffect(() => {
    
    const observer1 = new IntersectionObserver(callbackFunction1, options)
    observer1.observe(box1ref.current)
    
    const observer2 = new IntersectionObserver(callbackFunction2, options)
    observer2.observe(box2ref.current)

  }, [box1ref, box2ref, options])

  return (
    <div className="app">
      <div className="isVisible">{BoxOneIsVisible ? "1 IS IN VIEWPORT" : BoxTwoIsVisible ? "2 IS IN VIEWPORT" : "NONE IN VIEWPORT"}</div> 
      <div className="section"></div>
     <div className="box" ref={box1ref}>Box1</div>
     <div className="box" ref={box2ref}>Box2</div>
    </div>
  );
}

export default App;
