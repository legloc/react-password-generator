const Option = ({ title }) => (
  <div className="option-wrapper mb-2">
    <span>{ title }</span>
    <div className="form-check form-switch">
      <input className="form-check-input pointer" type="checkbox" />
    </div>
  </div>
)

export default Option