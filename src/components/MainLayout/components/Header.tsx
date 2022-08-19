import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Cart from "components/MainLayout/components/Cart";
import {Link} from 'react-router-dom';
import SignIn from '../components/SignIn'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    homeLink: {
      color: 'white',
      textDecoration: 'none'
    }
  }),
);

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [token, setToken] = React.useState(localStorage.getItem('authorization_token') || '')
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('authorization_token');
  }
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.homeLink} to="/">Lemonade store</Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.homeLink} to="/swagger">SWAGGER</Link>
        </Typography>
        {token ? (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/admin/orders" onClick={handleClose}>Manage orders</MenuItem>
              <MenuItem component={Link} to="/admin/products" onClick={handleClose}>Manage products</MenuItem>
              <MenuItem  onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        ) : <SignIn onTokenHandler={setToken} token={token}/>}
        <Cart/>
      </Toolbar>
    </AppBar>
  );
}
