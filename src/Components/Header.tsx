import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import Navlink from "./shared/NavLink";
import { useAuth } from "../context/authContext";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none", mt:'15px' }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        {!auth.isLoggedIn ? (
          <>
            <Navlink to="/login" bg="#DFDFDF" text="Login" textColor="black" />
            <Navlink to="/signup" bg="#DFDFDF" text="Signup" textColor="black" />
          </>
        ) : (
          <>
            <Navlink
              to="/chats"
              bg="#DFDFDF"
              text="Go to Chats"
              textColor="black"
            />
            <Navlink
              to="/"
              bg="#DFDFDF"
              text="Logout"
              textColor="black"
              onClick={auth.logout}
            />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
