import ThemeContext from "./themeContext";
import { useContext, useState } from "react";

const ThemeToggler = () => {
    const [showLight, setShowLight] = useState(true);

    const [themeState, dispatchLightTheme, dispatchDarkTheme] = useContext(
        ThemeContext
    );

    const toggleTheme = () => {
        showLight ? dispatchDarkTheme() : dispatchLightTheme();
        setShowLight(!showLight);
    };

    console.log(themeState);
    return (
        <div>
            {/* <button onClick={toggleTheme}>Switch to Dark</button> */}
            <button onClick={toggleTheme}>
                {showLight ? "Change to Dark Theme" : "Change to Light Theme"}
            </button>
        </div>
    );
};

export default ThemeToggler;
