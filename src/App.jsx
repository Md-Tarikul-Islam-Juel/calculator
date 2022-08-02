import './App.css'
import Calculator from "./components/Calculator/Calculator"
function App() {
  return(
    <>
         <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="cal">
                  <div className='cal1'>
                    <Calculator/>
                  </div>
                </div>
              </div>
            </div>
         </div>
    </>
    )
}

export default App