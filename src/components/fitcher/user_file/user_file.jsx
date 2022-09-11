import "./user_file.css";
import React from "react";
import {addAction} from '../../../stor/actions/users_action'
import { connect } from "react-redux";
import { useState } from "react";


const mapDispatchToProps = (dispatch)=>({
  addNewUser: (userObj)=> dispatch(addAction(userObj))
})

function UserFile(props) {
  const [user,setUser]=useState({})
  const changeInput = (e) => {
    user[e.target.name]= e.target.value;
  }
  return (
    <div className="user-file">
      <h1>user_file</h1>
      <label htmlFor="">first name: </label><br />
      <input name="fName" defaultValue={props.users[0].fName} onChange={changeInput} type="text" /><br />
      <label htmlFor="">last name: </label><br />
      <input name="lName" defaultValue={props.users[0].lName} onChange={changeInput} type="text" /><br />
      <button onClick={()=>props.addNewUser(user)}>add</button>
    </div>
  );
};

export default connect(null,mapDispatchToProps)(UserFile);
