import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: "auto",
        gap: "8px",
      }}
    >
      <Link to="/">
        <img
          src="openai.png"
          alt="openai"
          height={"30px"}
          width={"30px"}
          className="image-inverted"
        />
      </Link>
      <Typography
        sx={{
          display: { sm: "block", xs: "none" },
          mr: "auto",
          fontWeight: "800",
          textShadow: "2px 2px 20px #000",
        }}
      >
        Chat-ai Mern
      </Typography>
    </div>
  );
};

export default Logo;
