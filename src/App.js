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
      setErrorFullName("لا يمكن ترك أسم المستخدم فارغا")
    }else{
      setErrorFullName("");
    }
    if(!email){
      setErrorEmail("لا يمكن ترك بريد المستخدم فارغا")
    }else {
      setErrorEmail("");
    }
    if(!password){
      setErrorPassword("لا يمكن ترك كلمة المرور فارغا");
    }else if(password.length < 6) {
      setErrorPassword("كلمة المرور يجب ان تكون اكثر من سته احروف")
    }else {
      setErrorPassword("");
    }
  }

  return (
    <div className="container">
  <div className="container__title">أنشاء حساب</div>

   {/* <div className="container__error">
  
  </div> } */}

  <div dir="rtl" className="container__body">
    <form className="form"> 
       <div className="form__group">
          <i className="fa fa-user"></i>
          <input 
          type="text"
          placeholder="أسم السمتخدم"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)} />
       </div>
         {errorFullName && <p className="error">{errorFullName}</p>}
       <div className="form__group">
          <i className="fa fa-envelope"></i>
          <input 
          type="email" 
          placeholder="أيميل المستخدم" 
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
          />
       </div>
         {errorEmail && <p className="error">{errorEmail}</p>}
       <div className="form__group">
          <i className="fa fa-unlock-alt"></i>
          <input 
          type="password" 
          placeholder="كلمة المرور"
          value = {password}
          onChange = {(e) => setPassword(e.target.value)}
          /><br/>
       </div>
       {errorPassword && <p className="error">{errorPassword}</p>}

       <button onClick={handleValid}>سجل حساب</button>
    </form>
  </div>
    <div className="container__footer">
    <div className="footer__title">
       اذا كان عندك حساب سابقا؟<a href="#">تسجيل دخول</a>
    </div>
  </div>
</div>
  );
}

export default App;
