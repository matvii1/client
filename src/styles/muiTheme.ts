import { createTheme } from '@mui/material'
declare module '@mui/material/styles' {
  interface TypographyVariants {
    smallMessage: React.CSSProperties
    smallIcon: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    smallMessage?: React.CSSProperties
    smallIcon?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    smallMessage: true
    smallIcon: true
  }
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'hsl(230, 67%, 57%)',
    },
    secondary: {
      main: 'hsl(357, 50%, 58%)',
    },
  },
  typography: {
    smallMessage: {
      fontSize: '0.8rem',
    },
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    h3: {
      fontSize: '1.17rem',
    },
    h4: {
      fontsize: '1rem',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
})

Object.assign(theme, {
  overrides: {
    MUIRichTextEditor: {
      root: {
        marginTop: 20,
      },
      editor: {
        borderBottom: '1px solid gray',
      },
    },
  },
})
