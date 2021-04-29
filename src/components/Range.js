const Range = () => (
  <div className="range-wrapper mb-2">
    <span>Length: <span className="fw-bold">32</span></span>
    <div className="d-flex align-items-center">
      <span>4</span>
      <input className="form-range mx-2" type="range" id="customRange" min="4" max="32" />
      <span>32</span>
    </div>
  </div>
)

export default Range