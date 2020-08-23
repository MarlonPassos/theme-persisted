import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBarMenu from './components/AppBarMenu'
import Content from './components/Content'
import dynamicTheme from './components/Theme'

const useStyles = makeStyles((theme: Theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
}))

interface ThemeProps {
  themeValue: boolean,
  setThemeValue: (theme: boolean) => {}
}

const App: React.FC<ThemeProps> = ({ themeValue, setThemeValue }) => {
  const classes = useStyles()

  return (
    <>
      <AppBarMenu handleThemeChange={() => setThemeValue(!themeValue)} theme={themeValue} />
      <main className={classes.layout}>
        <Content handleThemeChange={() => setThemeValue(!themeValue)} theme={themeValue} />
      </main>
    </>

  )
}

export default dynamicTheme(App)