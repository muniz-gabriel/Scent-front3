import styles from "./Banner.module.css";

export default function Banner() {
    return (
        <section className={styles.secao_banner}>
            <div className={styles.texto}>
                <h2>Sua fragrância favorita</h2>
                <h1>AINDA MELHOR</h1>
            </div>
        </section>
    )
}