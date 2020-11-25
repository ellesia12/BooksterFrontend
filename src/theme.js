
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';
const font1 =  "'Alfa Slab One', cursive";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#718680',
    },
    secondary: {
      main: '#b2837a',
    },
    tertiary: {
      main: '#fcd392'
    }
  },
    typography: {
      fontFamily: font1,
      }
});

export default theme; 