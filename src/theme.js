import { createMuiTheme } from '@material-ui/core/styles';

// import LufgaMedium from './fonts/Lufga/LufgaMedium/font.woff2';
// import LufgaSemiBold from './fonts/Lufga/LufgaSemiBold/font.woff2';
// import LufgaRegular from './fonts/Lufga/LufgaRegular/font.woff2';

// const lufgaR = {
//   fontFamily: 'Lufga-Regular',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   src: `
//     local('Lufga'),
//     local('Lufga-Regular'),
//     url(${LufgaRegular}) format('woff2')
//   `,
// };

// const lufgaM = {
//   fontFamily: 'Lufga-Medium',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 500,
//   src: `
//     local('Lufga'),
//     local('Lufga-Medium'),
//     url(${LufgaMedium}) format('woff2')
//   `,
// };

// const lufgaSM = {
//   fontFamily: 'Lufga-SemiBold',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 600,
//   src: `
//     local('Lufga'),
//     local('Lufga-SemiBold'),
//     url(${LufgaSemiBold}) format('woff2')
//   `,
// };

const uColors = {
  primary: '#D40078',
  primaryHover: '#000955',
  secondary: '#046FE5',
  secondaryHover: '#00119a',
  secondaryDisabled: '#ffffff4d',
  disabled: '#e0e2f2',
  neutralWhite: '#ffffff',
  neutralGray: '#f2f2f2',
  neutralBlack: '#1f1f1f',
  accentTeal: '#00dfea',
  accentMagenta: '#fd0fa4',
  info: '#00119a',
  error: '#ff4e69',
  success: '#00df9b',
  warning: '#ff9c3e',
  gradientMagenta: '#fd0fa4',
  gradientBlue: '#00119a',
};

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Bangers", cursive'],
    h1: {
      fontSize: '42px',
      lineHeight: '41px',
      fontWeight: '600',
      textShadow:
        '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
      letterSpacing: '3px',
    },
    h2: {
      fontSize: '22px',
      lineHeight: '28px',
      fontWeight: '600',
    },
    h3: {
      fontSize: '17px',
      lineHeight: '22px',
      fontWeight: '600',
    },
    h4: {
      fontSize: '15px',
      lineHeight: '20px',
      fontWeight: '500',
    },
    body1: {
      fontFamily: ['Arial'],
      fontSize: '15px',
      lineHeight: '20px',
      fontWeight: '400',
    },
    body2: {
      fontFamily: ['Arial'],
      fontSize: '13px',
      lineHeight: '18px',
      fontWeight: '400',
      color: '#fff',
    },
    button: {
      fontSize: '17px',
      lineHeight: '22px',
      fontWeight: '600',
      textTransform: 'none',
    },
  },
  palette: {
    common: {
      black: uColors.neutralBlack,
      white: uColors.neutralWhite,
    },
    background: {
      // paper: '#000',
      default: '#000',
    },
    text: {
      primary: uColors.primary,
      secondary: uColors.secondary,
      disabled: uColors.disabled,
      hint: uColors.accentMagenta,
    },
    grey: {
      50: '#fafafa',
      400: '#bdbdbd',
      800: '#424242',
    },
    primary: {
      main: uColors.primary,
      hover: uColors.primaryHover,
    },
    secondary: {
      main: uColors.secondary,
      hover: uColors.secondaryHover,
    },
    error: {
      main: uColors.error,
    },
    warning: {
      main: uColors.warning,
    },
    info: {
      main: uColors.info,
    },
    success: {
      main: uColors.success,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        // fontFamily: 'Impact',
      },
    },
    MuiOutlinedInput: {
      root: {
        // margin: '8px 0 8px 0',
        borderRadius: '24px',
        // height: '48px',
        width: '269px',
        backgroundColor: '#fff',
        color: '#1f1f1f',
      },
    },
    MuiInputLabel: {
      root: {
        color: '#1f1f1f',
        '&$focused': {
          color: '#1f1f1f',
          fontSize: '18px',
          fontWeight: 'bold',
          fontFamily: ['"Bangers", cursive'],
        },
      },
    },
  },
});

export default theme;
