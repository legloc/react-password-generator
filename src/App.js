import Output from './components/Output'
import Range from './components/Range'
import Option from './components/Option'
import Button from './components/Button'
import './App.sass'

const App = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title fw-bold text-center">Password Generator</h4>
              <Output />
              <Range />
              <Option title="Include Uppercase" />
              <Option title="Include Lowercase" />
              <Option title="Include Symbols" />
              <Option title="Include Numbers" />
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App