import './App.sass'

const App = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title fw-bold text-center">Password Generator</h4>

              <div className="mb-3">
                <input className="form-control pointer" type="text" value="CLICK GENERATE" disabled />
                <small className="d-block text-muted text-center">Click to copy</small>
              </div>
              
              <div className="range-wrapper mb-2">
                <span>Length: <span className="fw-bold">32</span></span>
                <div className="d-flex align-items-center">
                  <span>4</span>
                  <input className="form-range mx-2" type="range" id="customRange" min="4" max="32" />
                  <span>32</span>
                </div>
              </div>

              <div className="option-wrapper mb-2">
                <span>Include Uppercase</span>
                <div className="form-check form-switch">
                  <input className="form-check-input pointer" type="checkbox" />
                </div>
              </div>

              <div className="option-wrapper mb-2">
                <span>Include Lowercase</span>
                <div className="form-check form-switch">
                  <input className="form-check-input pointer" type="checkbox" />
                </div>
              </div>

              <div className="option-wrapper mb-2">
                <span>Include Symbols</span>
                <div className="form-check form-switch">
                  <input className="form-check-input pointer" type="checkbox" />
                </div>
              </div>

              <div className="option-wrapper mb-2">
                <span>Include Numbers</span>
                <div className="form-check form-switch">
                  <input className="form-check-input pointer" type="checkbox" />
                </div>
              </div>

              <button className="btn w-100 btn-primary">GENERATE PASSWORD</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App