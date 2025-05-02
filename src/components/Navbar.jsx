import useTheme from '../hooks/useTheme'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="navbar">
      <h1>My Theme App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </nav>
  )
}

export default Navbar
