function Button({ btnClass, text, onClick }) {
    return (
      <button className={`btn ${btnClass} btn-sm`} onClick={onClick}>
        {text}
      </button>
    );
  }
  
  export default Button;
  