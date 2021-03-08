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
  primary: '#00119a',
  primaryHover: '#000955',
  secondary: '#ffffff',
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
    fontFamily: ['Arial'],
    h1: {
      fontSize: '34px',
      lineHeight: '41px',
      fontWeight: '600',
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
      fontSize: '15px',
      lineHeight: '20px',
      fontWeight: '400',
    },
    body2: {
      fontSize: '13px',
      lineHeight: '18px',
      fontWeight: '400',
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
      paper: '#fff',
      default: '#fafafa',
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
    text: {
      primary: uColors.primary,
      secondary: uColors.secondary,
      disabled: uColors.disabled,
      hint: uColors.accentMagenta,
    },
    uAccent: {
      teal: uColors.accentTeal,
      magenta: uColors.accentMagenta,
    },
    uNeutral: {
      white: uColors.neutralWhite,
      gray: uColors.neutralGray,
      black: uColors.neutralBlack,
    },
  },
  uGradient: {
    colors: {
      magenta: uColors.gradientMagenta,
      blue: uColors.gradientBlue,
    },
  },
  overrides: {
    MuiCssBaseline: {
      // '@global': {
      //   '@font-face': [lufgaM, lufgaSM, lufgaR],
      // },
    },
    MuiButton: {
      containedPrimary: {
        '&:disabled': {
          backgroundColor: uColors.disabled,
          color: uColors.neutralWhite,
          opacity: '0.6',
        },
      },
      outlinedPrimary: {
        border: '2px solid',
        '&:hover': {
          border: '2px solid',
        },
        '&:disabled': {
          border: '2px solid',
          color: uColors.disabled,
          borderColor: uColors.disabled,
        },
      },
      containedSecondary: {
        color: uColors.primary,
        '&:disabled': {
          color: uColors.disabled,
          backgroundColor: uColors.neutralWhite,
        },
      },
      outlinedSecondary: {
        border: '2px solid',
        '&:hover': {
          border: '2px solid',
        },
        '&:disabled': {
          border: '2px solid',
          color: uColors.secondaryDisabled,
          borderColor: uColors.secondaryDisabled,
        },
      },
    },
  },
});

export default theme;
