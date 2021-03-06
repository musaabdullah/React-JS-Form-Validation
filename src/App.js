import './style.css';
import {useState} from 'react';
function App() {

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [errorFullName, setErrorFullName] = useState();
  const [errorEmail, setErrorEmail] = useState();
  const [errorPassword, setErrorPassword] = useState();

  // const[error, setError] = useState({fullName: "", email: "", password: ""});
  // const error = { title: ""};

  const handleValid = (e) => {
    e.preventDefault();
    if(!fullName){
      setErrorFullName("You can't leave full name empty")
    }else{
      setErrorFullName("");
    }
    if(!email){
      setErrorEmail("You can't leave email empty")
    }else {
      setErrorEmail("");
    }
    if(!password){
      setErrorPassword("You can't leave password empty");
    }else if(password.length < 6) {
      setErrorPassword("Password must be more than 6 character")
    }else {
      setErrorPassword("");
    }
  }

  return (
    <div className="container">
  <div className="container__title">create account</div>

   {/* <div className="container__error">
  
  </div> } */}

  <div className="container__body">
    <form className="form"> 
       <div className="form__group">
          <i className="fa fa-user"></i>
          <input 
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)} />
       </div>
         {errorFullName && <p className="error">{errorFullName}</p>}
       <div className="form__group">
          <i className="fa fa-envelope"></i>
          <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
          />
       </div>
         {errorEmail && <p className="error">{errorEmail}</p>}
       <div className="form__group">
          <i className="fa fa-unlock-alt"></i>
          <input 
          type="password" 
          placeholder="Password"
          value = {password}
          onChange = {(e) => setPassword(e.target.value)}
          /><br/>
       </div>
       {errorPassword && <p className="error">{errorPassword}</p>}

       <button onClick={handleValid}>signup</button>
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
