import { Link } from "react-router-dom";

const Users = ({ user }) => {
  return (
    <li>
      <Link to={`/users/${user.firebase_uid}`}>
        <p>{user.username}</p>
      </Link>
    </li>
  );
};

export default Users;
