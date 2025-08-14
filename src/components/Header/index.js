import styles from './Header.module.css';

export default function Header() {
    return (
        <header>
            <div>
                <picture>
                    <a href=""><img src='./logo.png'/></a>
                </picture>

                <nav>
                    <a href="#">Produto</a>
                    <a href="#">Sobre</a>
                    <a href="#">Contato</a>
                </nav>
            </div>
        </header>
    )
}