import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Container from "@material-ui/core/Container";
import Header from "components/MainLayout/components/Header";

type MainLayoutProps = {
  children: React.ReactNode;
};
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        My Store
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const classes = useStyles();

  return (
    <>
      <Header/>
      <main>
        <Container className={classes.container} maxWidth="md">
          {props.children!}
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Dzmitry Shauchonak, NodeJS in AWS
        </Typography>
        <Copyright/>
      </footer>
    </>
  );
};

export default MainLayout;