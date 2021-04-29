const Option = ({ title, onChange }) => (
  <div className="option-wrapper mb-2">
    <span>{ title }</span>
    <div className="form-check form-switch">
      <input className="form-check-input pointer" type="checkbox" onChange={ onChange } />
    </div>
  </div>
)

export default Option