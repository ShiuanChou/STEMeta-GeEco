import styles from './_VideoBanner.module.scss';
import { FiArrowDown } from 'react-icons/fi'

export default function VideoBanner() {
    const handleScroll = (e: React.MouseEvent<Element, MouseEvent>): void => {
        e.preventDefault();
        const elem = document.getElementById('intro');
        window.scrollTo({
            top: elem?.getBoundingClientRect().top,
            behavior: "smooth"
        })
    }

    return (
        <div className={styles.container}>
            <video className={styles.video} autoPlay muted loop>
                <source src="/video/background.mp4" type="video/mp4" />
            </video>
            <section className={styles.title}>
                <h1>STEMeta & GeEco</h1>
                <p>"元"創教育{' | '}女力行<br />助推女性跨入STEM領域</p>
                <div className={styles.more} onClick={handleScroll}>
                    <span><FiArrowDown /></span>
                    <p>開始探索</p>
                </div>
            </section>
        </div>
    )
}