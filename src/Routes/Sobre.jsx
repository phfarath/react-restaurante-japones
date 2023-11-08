import { } from 'react';
import styles from '../Routes/styles/sobre.module.css'

function Sobre() {

    return (
        <>
            <section className={styles.container}>
                <h1>Desenvolvedores</h1>

                <div className={styles.containerCards}>
                    <div className={styles.Item}>
                        <img src="./src/assets/foto de perfil.jpg" alt="Foto de um dos desenvolvedores" />
                        <h2>Lucca Vilaça Okubo</h2>
                    </div>
                    <div className={styles.Item}>
                        <img src="./src/assets/fot do ph.jpeg" alt="Foto de um dos desenvolvedores" />
                        <h2>Pedro Henrique Pontes Farath</h2>
                    </div>
                    <div className={styles.Item}>
                        <img src="./src/assets/foto do yan.jpeg" alt="Foto de um dos desenvolvedores" />
                        <h2>Ian Cancian Nachtergaele</h2>
                    </div>
                    <div className={styles.Item}>
                        <img src="./src/assets/foto do pl.jpeg" alt="Foto de um dos desenvolvedores" />
                        <h2>Pedro Lucas de Andrade Nunes</h2>
                    </div>
                </div>
            </section >
        </>
    )

}
export default Sobre;