import { useGlobalContext } from './Context'
import { MdDarkMode } from 'react-icons/md'
import { MdLightMode } from 'react-icons/md'
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <MdDarkMode className="toggle-icon" />
        ) : (
          <MdLightMode className="toggle-icon" />
        )}
      </button>
    </section>
  )
}
export default ThemeToggle
