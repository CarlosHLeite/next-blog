import Link from 'next/link'
import style from '../styles/Nav.module.css'

const Navbar = () => {
  return (
    <nav className={style.nav}>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar