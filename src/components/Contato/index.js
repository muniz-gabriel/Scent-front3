import styles from './Contato.module.css';

export default function Contato() {
    return(
        <section id={styles.contato}>
            <div className={styles.contato}>
                <h2>Fale Conosco</h2>
                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou 
                    entre em contato através das nossas redes sociais.
                </p>

                <div className={styles.central_redes}>
                    <div className={styles.bloco_contato}>
                        <h4>Contato</h4>
                        <ul>
                            <li>
                                <picture>
                                    <img src='./local.png' alt='localização'/>
                                </picture>Caraguatatuba - SP
                            </li>

                            <li>
                                <picture>
                                    <img src='./telefone.png' alt='telefone'/>
                                </picture>(12) 98711-0058
                            </li>

                            <li>
                                <picture>
                                    <img src='./mail.png' alt='email'/>
                                </picture>scentperfume@gmail.com
                            </li>


                        </ul>
                    </div>

                    <div className={styles.bloco_contato}>
                        <h4>Redes Sociais</h4>
                        <ul>
                            <li>
                                <picture>
                                    <img src='./twitter.png'></img>
                                </picture>Scent Perfumaria
                            </li>

                            <li>
                                <picture>
                                    <img src='./insta.png'></img>
                                </picture>@Scentperfum
                            </li>

                            <li>
                                <picture>
                                    <img src='./tiktok.png'></img>
                                </picture>@Scentperfum
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </section>
    )
}