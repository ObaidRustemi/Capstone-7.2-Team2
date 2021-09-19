import { Link } from "react-router-dom";

const Users = ({ user }) => {
  debugger
  return (
    <li>
      <Link to={`/users/${user.id}`}>
        <p>{user.username}</p>
      </Link>
    </li>
  );
};

export default Users;
