import Image from 'next/image';
import styles from './_Intro.module.scss';
import person from '/public/images/metaverse.png';
import { FiSearch, FiPlay } from 'react-icons/fi';

export default function Intro() {
    return (
        <section className={styles.container} id="intro">
            <div className={`${styles.wrap} ${styles.introWord}`}>
                <h2>快來建造專屬你的</h2>
                <h2 className={styles.highlight}>性平&quot;元&quot;城市</h2>
                <p>模擬城市-自己當市長<br />好玩性、可靠性和創意性<br />盡在P2L City</p>
                <div className={styles.btnGroup}>
                    <button className={styles.btnVisit}><span><FiSearch /></span>Visit Now</button>
                    <button className={styles.btnPlay}><span><FiPlay /></span>Watch Video</button>
                </div>
            </div>
            <div className={`${styles.wrap} ${styles.person}`}>
                <Image src={person} alt='metaverse' />
            </div>
        </section>
    )
}