
import User from "./User";
import "../Styling/UserList.css"



const UserList = ({users}) => {


  return (
    <div className="user-list-container">
      <ul>
        {users.map((user) => {
          return <User key={user.id} user={user}/>;
        })}
      </ul>
    </div>
  );
};

export default UserList;
