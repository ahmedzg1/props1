import React from "react";


function Profile(props) {
  console.log(props.children);

  return (
    <div>
      {props.x.map((el) => (
        <div>
          <h1>{el.name}</h1>
          <h1>{el.bio}</h1>
          <h1>{el.Profession}</h1>
          <button onClick={()=>props.alertt(el.name)}>namesss</button>
        </div>
      ))}
      <img src={props.children}></img>
   
    </div>
  );
}
//Profile.propTypes = {
 // name: proptypes.string,
  
//}
export default Profile;
