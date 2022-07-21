
import React,{useState} from 'react';
import './App.css';
import { auth , googleProvider , githubProvider} from './firebase';

const App = () => {
  const [user,setUser] = useState(null)

  const googleLogin = async()=>{
    try{
      await auth.signInWithPopup(googleProvider);
      setUser(await auth.currentUser);// after login, stote all data from current login page
    } catch (error){
      console.log(error);
    }
  };
  const githubLogin = async()=>{
    try{
      await auth.signInWithPopup(githubProvider);
      setUser(await auth.currentUser);
    } catch (error){
      console.log(error);
    }
  };
  console.log(user);


  return (
    <section>
      <div>
        <div className="buttonContainer" onClick={googleLogin}>
          <img src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="" />
          <button>Google Login</button>
        </div>
        
        <div className="buttonContainer" onClick={githubLogin}>
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
          <button>Github Login</button>
        </div>
      </div>
      <h1>{user?.email}</h1>
    </section>
  );
};

export default App;