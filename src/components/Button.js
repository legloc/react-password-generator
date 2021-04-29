const Button = ({ title, onClick }) => (
  <button className="btn w-100 btn-primary" onClick={ onClick }>
    { title }
  </button>
)

export default Button