import styles from './Sobre.module.css';

export default function Sobre() {
    return (
        <section id={styles.sobre} className={styles.sobre}>
            <div className={styles.center}>
                <h2>Sobre nós</h2>
                <p>Fundada em 2001....</p>
            

                <div className={styles.elementos_sobre}>
                    <picture>
                        <img src='quadro06.jpg' alt='Nosso estoque' />
                    </picture>

                <div className={styles.sobre_elementos}>
                    <h4>Produtos de alta qualidade</h4>
                    <p>Nossos produtos são selecionados</p>
                </div>

                <div className={styles.sobre_elementos}>
                    <h4>Atendimento personalizado</h4>
                    <p>Nossa equipe está sempre pronta para ajudar</p>
                </div>

                <picture>
                    <img src='quadro02.jpg' alt='Nossa variedade' />
                </picture>

                </div>
            </div>
        </section>
    )
}