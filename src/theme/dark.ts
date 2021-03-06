import { createMuiTheme } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: deepPurple,
  },
});
