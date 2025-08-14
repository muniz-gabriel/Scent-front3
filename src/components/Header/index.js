// components/Header/Header.js
import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
        <div className={styles.header}>
            <picture className={styles.picture}>
            <a href="/">
                <img src="/logo.png" alt="Logo" className={styles.logo} />
            </a>
            </picture>
            <nav className={styles.nav}>
                <a href="#">Produto</a>
                <a href="#">Sobre</a>
                <a href="#">Contato</a>
                </nav>
        </div>
        </header>
    )
}
