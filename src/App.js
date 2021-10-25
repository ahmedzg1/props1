import './App.css';
import Profile from './profile/Profile.js';
import { defaultProps } from 'default-props'
import PropTypes from 'prop-types'
function Component(props) {
  return <abc {...props} />
}
function App() {

 let f1 =
 [

       {name : "ahmed zrig"||"yourname",bio : "27 from gabes "||"yourbio" , Profession : "looking for job"||"yourjob" } 
      
      ]
   let imgs = "https://www.w3schools.com/howto/img_avatar.png"

let alertt =(name)=>{
  alert(`hello ${name}`)
};

  return (
    <div className="App">
      <Profile x ={f1} alertt={alertt} >{imgs}</Profile>
     
   
     
   
    </div>
  
  );
  
}


export default App;