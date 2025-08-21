import styles from './Produtos.module.css';

export default function Produtos() {
    return (
        <section id='produto' className={styles.produtos}>
            <div className={styles.produtos_container}>
                <h2>Nossos Produtos</h2>
                <p>Aqui, reunimos as fragrâncias mais sofisticadas do
                mercado, trazendo para você marcas renomadas e essências marcantes
                que trazem luxo, elegância e personalidade.
                </p>
                <p>
                    Autenticidade garantida | As melhores marcas | Entrega rápida e segura
                </p>

                <div className={styles.perfume_img}>
                    <div className={styles.card_perfume}>
                        <span className={styles.selo}>Mais Vendido</span>
                        <h3>One Million 200ml</h3>
                        <picture>
                            <img src='./img01.png' alt='One Million'></img>
                        </picture>
                        <p className={styles.preco}>R$ 699,90</p>
                        <button className={styles.button}>Comprar</button>
                    </div>

                    <div className={styles.card_perfume}>
                        <span className={styles.seloNovo}>Novo</span>
                        <h3>Le Beau 125ml</h3>
                        <picture>
                            <img src='./img02.png' alt='Le Beau'></img>
                        </picture>
                        <p className={styles.preco}>R$ 479,90</p>
                        <button className={styles.button}>Comprar</button>
                    </div>

                    <div className={styles.card_perfume}>
                        <h3>Stronger With You 100ml</h3>
                        <picture>
                            <img src='./img03.png' alt='Stronger'></img>
                        </picture>
                        <p className={styles.preco}>R$ 499,90</p>
                        <button className={styles.button}>Comprar</button>
                    </div>

                    <div className={styles.card_perfume}>
                        <h3>Aqcua Di Gio 100ml</h3>
                        <picture>
                            <img src='./img04.png' alt='Acqua'></img>
                        </picture>
                        <p className={styles.preco}>R$ 431,90</p>
                        <button className={styles.button}>Comprar</button>
                    </div>
                </div>

            </div>
        </section>
    )
} 