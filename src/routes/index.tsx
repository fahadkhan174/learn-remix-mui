import * as React from 'react';
import type { MetaFunction } from 'remix';
import { Link } from 'remix';
import Typography from '@mui/material/Typography';

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: 'Readder',
    description: 'Welcome to readder!',
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <React.Fragment>
      <Typography variant="h4" component="h1" gutterBottom>
        Readder with Mui
      </Typography>
      <Link to="/about" color="secondary">
        Go to the about page
      </Link>
    </React.Fragment>
  );
}
