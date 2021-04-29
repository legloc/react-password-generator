const Output = ({ title, onClick}) => (  
  <div className="mb-2">
    <input className="form-control pointer" type="text" value={ title } onClick={ onClick } readOnly />
    <small className="d-block text-muted text-center">Click to copy</small>
  </div>
)

export default Output