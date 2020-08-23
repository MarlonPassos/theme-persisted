import React from 'react'
import { Paper, Typography, makeStyles } from '@material-ui/core'
import Switch from "@material-ui/core/Switch"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  }
}))

interface Props {
  theme: boolean,
  handleThemeChange(): void
}

const Content: React.FC<Props> = ({ theme, handleThemeChange }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Typography component="h1" variant="h4" align="center">
        Content
        <Switch checked={theme} onChange={handleThemeChange} />
      </Typography>
    </Paper>
  )
}

export default Content
