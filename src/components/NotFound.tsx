import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "remix";

type Props = {
  status?: number;
  statusText?: string;
};

const NotFound = (props: Props) => {
  const { status, statusText } = props;
  return (
    // <div>
    //   <h1>
    //     {status}: {statusText}
    //   </h1>
    //   <p>Oops! Looks like you tried to visit a page that does not exist.</p>
    // </div>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} style={{ paddingTop: "124px"}}>
            <Typography variant="h1">404 Oops!</Typography>
            <Typography variant="h6">
              Looks like you tried to visit a page that does not exist.
            </Typography>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button variant="contained">Back Home</Button>
            </Link>
          </Grid>
          <Grid item xs={0} sm={6}>
            <img
              src="/images/svgs/404_2.svg"
              alt="404 Error Page"
              // width={500}
              // height={500}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NotFound;
