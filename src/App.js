import './style.css';

function App() {
  return (
    <div className="container">
  <div className="container__title">create account</div>

  <div className="container__error">
  
  </div>

  <div className="container__body">
    <form className="form"> 
       <div className="form__group">
          <i className="fa fa-user"></i>
          <input type="text" placeholder="Full Name" />
       </div>
       <div className="form__group">
          <i className="fa fa-envelope"></i>
          <input type="email" placeholder="Email" />
       </div>
       <div className="form__group">
          <i className="fa fa-unlock-alt"></i>
          <input type="password" placeholder="Password" />
       </div>
       <button>signup</button>
    </form>
  </div>
    <div className="container__footer">
    <div className="footer__title">
      Already have an account?<a href="#">Log in</a>
    </div>
  </div>
</div>
  );
}

export default App;
