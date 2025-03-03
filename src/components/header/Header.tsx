import logo from '../../assets/images/rocket.png'
import style from '../header/Header.module.css'

function Header() {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img src={logo} alt="logo" />
                <h1>to<span>do</span></h1>
            </div>
        </header>
    )
}

export default Header