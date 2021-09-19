import "../Styling/UserIndex.css";
import UserList from "../Components/UserList";

const UsersIndex = ({users}) => {
  debugger
  return (
    <div className="user-index-container">
      <h1>User Index</h1>
      <UserList users={users}/>
    </div>
  );
};

export default UsersIndex;
