import { useEffect, useState } from "react";

const ColorPallete = ({themeParams}) => {

    const createPallete = (themeParams) => {
       const rows = Object.keys(themeParams).map((item) => {

            return(<tr key={item} >
                    <td>{item}</td>
                    <td>{themeParams[item]}</td>
                    <td
                    style={{background: `${themeParams[item]}`}}
                    ></td>
                   </tr>)
        });

        return rows;
    }

    const [ colorScheme, setColorScheme ] = useState(window.Telegram.WebApp.colorScheme);

    useEffect(() => {
        setColorScheme(window.Telegram.WebApp.colorScheme);
    }, [themeParams])

        return(
            <table>
                <caption><h4>Current color scheme is <b>{colorScheme}</b></h4></caption>
                <caption>toggle "Night Mode" to see changes</caption>
                <thead>
                    <tr>
                        <td>property</td>
                        <td>hex</td>
                        <td>color</td>
                    </tr>
                </thead>
                <tbody>
                    {createPallete(themeParams)}
                </tbody>
            </table>
        )

    
}



export default ColorPallete;