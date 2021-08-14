import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import Copyright from '../src/Copyright';
import Link from '../src/Link';
import ProTip from '../src/ProTip';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Link href="/static" color="secondary">
          Go to the static page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
