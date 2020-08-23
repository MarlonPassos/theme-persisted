import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import Switch from "@material-ui/core/Switch"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block'
      }
    }
  })
)

interface Props {
  theme: boolean,
  handleThemeChange(): void
}

const AppBarMenu: React.FC<Props> = ({ theme, handleThemeChange }) => {
  const classes = useStyles()

  return (
    <AppBar position="absolute" className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          Material-UI
          </Typography>
        <div >
          <Switch checked={theme} onChange={handleThemeChange} />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarMenu