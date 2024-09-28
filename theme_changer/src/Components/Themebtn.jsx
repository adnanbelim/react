import React from "react";
import { themeContext } from "../Context/ThemeContext";
import useTheme from "../Context/ThemeContext";

function ThemeBtn() {
  const { themeMode, dayMode, nightMode } = useTheme()
  const onChangeTheme = (e) => {
    let check = e.target.checked
    if (check) nightMode()
    else dayMode()
  }
  React.useEffect(() => {
    let card = document.querySelector('.card')
    card.classList.remove('dark', 'light')
    card.classList.add(themeMode)
    console.log(card);
  }, [themeMode])

  return (
    <div className="themeBtn">
      <input type="checkBox" onChange={onChangeTheme} />
    </div>
  )
}
export default ThemeBtn