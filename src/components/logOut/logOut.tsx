import { Link } from "react-router-dom";

export const LogOut = ({
  firstName,
  handleLogOut,
}: {
  firstName: string;
  handleLogOut: () => Promise<void>;
}) => {
  return (
    <>
      <p>Hi {firstName}</p>
      <Link to="/profile">{firstName.substring(0, 1)}</Link>
      <button onClick={handleLogOut}>Log out</button>
    </>
  );
};
