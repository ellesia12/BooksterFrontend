
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import { Shadows } from "@material-ui/core/styles/shadows"

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
      main: '#fcf3cf'
    }
  },
    typography: {
      fontFamily: "font1",
      },
    listItemText: {
        fontFamily:"'Oswald', sans-serif",
        fontFfamily: "'PT Sans', sans-serif",
     
      },
     
});

export default theme; 