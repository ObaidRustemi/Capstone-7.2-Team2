import { useSelector } from "react-redux";

function useCurrentUser() {
  const users = useSelector(({ users }) => users);
  let currentUser = useSelector(({ currentUser }) => currentUser);
  if (!currentUser) return null;
  const found = users.find((user) => user.firebase_uid === currentUser.uid);
  currentUser = found ? found : currentUser;
  currentUser.firebase_uid = currentUser.firebase_uid
    ? currentUser.firebase_uid
    : currentUser.uid;
  return currentUser;
}

export default useCurrentUser;
