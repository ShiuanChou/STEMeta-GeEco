import styles from './_VideoBanner.module.scss';
import { FiArrowDown } from 'react-icons/fi'

export default function VideoBanner() {
    return (
        <div className={styles.container}>
            <video className={styles.video} autoPlay muted loop>
                <source src="/video/background.mp4" type="video/mp4" />
            </video>
            <section className={styles.title}>
                <h1>STEMate & GeEco</h1>
                <p>助推女性跨入STEM領域</p>
                <div className={styles.more}>
                    <span><FiArrowDown /></span>
                    <p>開始探索</p>
                </div>
            </section>
        </div>
    )
}