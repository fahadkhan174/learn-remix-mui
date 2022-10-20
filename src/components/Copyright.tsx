import Typography from "@mui/material/Typography";
import { Link } from "remix";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link
        to="/"
        style={{ textDecoration: "none", color: "#556cd6" }}
      >
        Readder
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
