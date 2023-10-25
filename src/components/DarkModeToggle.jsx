import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "./useDarkMode";
 
export default function DarkModeToggle() {
    const [colorTheme, setTheme] = useDarkMode();
    const [darkMode, setDarkMode] = useState(
        colorTheme === "light" ? true : false
    );
 
    const toggleDarkMode = (enabled) => {
        setTheme(colorTheme);
        setDarkMode(enabled);
    };
 
    return (
            <DarkModeSwitch
                style={{ marginLeft: "2rem",marginRight: "2rem" }}
                checked={darkMode}
                onChange={toggleDarkMode}
                size={25}
            />
    );
}