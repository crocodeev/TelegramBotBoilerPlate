import { useEffect, useState } from "react";
import ColorPallete from "./companents/ColorPallete";
import ExpandBtn from "./companents/ExpandBtn";
import CloseBtn from "./companents/CloseBtn";
import ToggleMainBtn from "./companents/ToggleMainBtn";
import UserInfo from "./companents/UserInfo";
import ValidationForm from "./companents/ValidationForm";

const App = () => {

    const [ themeScheme, setThemeScheme ] = useState({}); 

    const setColors = () => {
      const theme = window.Telegram.WebApp.themeParams;
      const html = document.getElementsByTagName('html')[0];
      html.style.backgroundColor = theme.bg_color;
      html.style.color = theme.text_color;

      setThemeScheme(() => {
       return( {
        ...themeScheme,
        ...theme
      })
      })
    }

  useEffect(() => {
      setColors();
      window.Telegram.WebApp.onEvent('themeChanged', setColors);
      return(() => {
          window.Telegram.WebApp.offEvent('themeChanged', setColors);
      })
  }, [])

    return(
      <div>
        <h3>Telegram WebApp API Demo</h3>
        <hr/>
        <ColorPallete themeParams={themeScheme}></ColorPallete>
        <hr/>
        <ExpandBtn />
        <CloseBtn />
        <ToggleMainBtn />
        <hr/>
        <UserInfo />
        <hr/>
        <h3>Validation</h3>
        <ValidationForm />
      </div>
    );
}

export default App;
