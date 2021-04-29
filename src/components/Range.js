const Range = ({ title, min, max, onChange }) => (
  <div className="range-wrapper mb-2">
    <span>{ title }: <span className="fw-bold">32</span></span>
    <div className="d-flex align-items-center">
      <span>{ min }</span>
      <input 
        className="form-range mx-2"
        type="range"
        min={ min }
        max={ max }
        defaultValue={ min }
        onTouchEnd={ e => onChange(e.target.value) }
        onMouseUp={ e => onChange(e.target.value) } />
      <span>{ max }</span>
    </div>
  </div>
)

export default Range