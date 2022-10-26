import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import MainContainer from './container/mainContainer';
import SidebarContainer from './container/SidebarContainer';
import FunctionContextProvider from './context/FunctionContext';
import GraphContextProvider from './context/GraphContext';
import TopBarContainer from './container/TopBarContainer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


const light: any = {
  palette: {
    mode: "light",
    text: {
      primary: '#000000'
    },
    primary: {
      main: "#F5F5F5",
    },
    secondary: {
      main: "#e6e6e6",
    },
    button: '#9cb59d'
  },
};

const dark: any = {
  palette: {
    mode: "dark",
    text: {
      primary: '#F5F5F5'
    },
    primary: {
      main: "#242424",
    },
    secondary: {
      main: "#636262",
    },
    button: '#7f9f80'
  },
};

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  const [isDarkMui, setIsDarkMui] = React.useState(false);
  const changeMuiTheme = () => {
    setIsDarkMui(!isDarkMui);
  };


  return (
    <div className="flex flex-row">
      <ThemeProvider theme={isDarkMui ? createTheme(dark) : createTheme(light)}>
        <FunctionContextProvider>
          <GraphContextProvider>
            <TopBarContainer changeMuiTheme={changeMuiTheme} />
            <SidebarContainer />
            <MainContainer />
          </GraphContextProvider>
        </FunctionContextProvider>
      </ThemeProvider>
    </div>
  )
};



ReactDOM.render(<App />, document.getElementById('app'));