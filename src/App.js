import React from "react"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Main from "./components/Main"

function App() {
  return (
      <div className="page--background">
          <div className="app--main__container">
              <Info />
              <Main />
              <Footer />
          </div>
          
      </div>
  )
}

export default App;
