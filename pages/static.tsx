import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { GetStaticProps } from 'next';
import * as React from 'react';
import Copyright from '../src/Copyright';
import Link from '../src/Link';
import ProTip from '../src/ProTip';

interface StaticPageProps {
  title: string;
  buttonLabel: string;
}

export default function Static(props: StaticPageProps) {
  const {
title, buttonLabel
  } = props;
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {title}
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          {buttonLabel}
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}


export const getStaticProps: GetStaticProps<StaticPageProps> = async () => {
  return {
    props: {title: "This is a static page that is revalidated every second", buttonLabel: "Go to the main page"},
    // Regenerate the page:
    // - When a request comes in
    // - At most once every 1 second
    revalidate: 1,
  };
};
