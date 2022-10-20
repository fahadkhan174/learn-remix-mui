import * as React from "react";
import { Link, MetaFunction } from "remix";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const meta: MetaFunction = () => {
  return {
    title: "About",
    description: "Welcome to remix!",
  };
};

export default function About() {
  return (
    <React.Fragment>
      <Typography variant="h4" component="h1" gutterBottom>
        Readder About Page
      </Typography>
      <Link
        to="/"
        style={{
          // textDecoration: "none",
          color: "inherit",
        }}
      >
        Go to the main page
      </Link>
    </React.Fragment>
  );
}
