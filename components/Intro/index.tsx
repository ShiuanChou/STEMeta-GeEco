import Image from 'next/image';
import styles from './_Intro.module.scss';
import person from '/public/images/person.jpg';

export default function Intro() {
    return (
        <section className={styles.container}>
            <div className={`${styles.wrap} ${styles.introWord}`}>
                <h2>Female Scientist</h2>
                <p>If you're in need of some creative inspiration, using nonsense words can be a great way to get the creative juices flowing. Simply generate a fake word and then come up with a definition of what that word could mean. Since it's not a real word, there's no right or wrong answer. You can let your imagination go wild and that should help to get the creative juices flowing. It's a great way to use a made up word generator.</p>
            </div>
            <div className={`${styles.wrap} ${styles.person}`}>
                <Image src={person} alt='女性科學家' />
            </div>
        </section>
    )
}