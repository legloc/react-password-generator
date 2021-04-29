import { useState } from 'react'

import Output from './components/Output'
import Range from './components/Range'
import Option from './components/Option'
import Button from './components/Button'
import './App.sass'

const App = () => {
  const [password, setPassword] = useState('CLICK GENERATE')
  const [length, setLength] = useState(4)
  const [uppercaseOption, setUppercaseOption] = useState(false)
  const [lowercaseOption, setLowercaseOption] = useState(false)
  const [symbolsOption, setSymbolsOption] = useState(false)
  const [numbersOption, setNumbersOption] = useState(false)

  const handleSubmit = () => {
    console.log('Handle Button click')
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title fw-bold text-center">Password Generator</h4>
              <Output title={ password } onClick={ () => console.log('Handle Input click') } />
              <Range title="Length" min="4" max="32" onChange={ val => setLength(parseInt(val)) } />
              <Option title="Include Uppercase" onChange={ () => setUppercaseOption(!uppercaseOption) } />
              <Option title="Include Lowercase" onChange={ () => setLowercaseOption(!lowercaseOption) } />
              <Option title="Include Symbols" onChange={ () => setSymbolsOption(!symbolsOption) } />
              <Option title="Include Numbers" onChange={ () => setNumbersOption(!numbersOption) } />
              <Button title="GENERATE PASSWORD" onClick={ handleSubmit } />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App