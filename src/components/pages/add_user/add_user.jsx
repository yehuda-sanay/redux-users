import "./add_user.css";
import React from "react";
import UserFile from '../../fitcher/user_file/user_file'
import { connect } from "react-redux";

const mapStateToProps=(state)=>{
  return {users:state.users};
};

function AadUser(props) {
  return (
    <div className="add-user">
      <h1>add_user</h1>
      <UserFile users={props.users} />
    </div>
  );
};

export default connect(mapStateToProps)(AadUser);
