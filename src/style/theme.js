import { createTheme } from "@material-ui/core/styles"

import { themeBase } from "./themeBase"

const PRIMARY_COLOR = "#003791"
const SECONDARY_COLOR = "#ff4b5f"

const theme = createTheme({
  ...themeBase,
  palette: {
    primary: { main: PRIMARY_COLOR },
    secondary: { main: SECONDARY_COLOR },
    custom: {
      headerPhone: "#a1afbf",
      headerPhoneHint: "#607289",
      footerText1: "#a1afbf",
      footerText2: "#607289",
      storeLinksColor: "#C1C9D2",
      footerBg: "#fff",
      acceptmentCheckbox: PRIMARY_COLOR,
      acceptmentLabel: "inherit",
    },
  },
  overrides: {
    ...themeBase.overrides,
    MuiButton: {
      ...themeBase.overrides.MuiButton,
      containedSecondary: {
        "&:hover": {
          backgroundColor: "#EC3449",
        },
      },
    },
  },
})

if (process.env.NODE_ENV !== "production") {
  console.error('⚠️ Deprecation theme "theme". Use the "/styles/themes/blue" instead')
}
/**
 * @deprecated use /styles/themes/blue instead
 */
export default theme
