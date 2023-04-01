import styles from './_Navbar.module.scss'

export default function Navbar() {
    return (
        <nav className={styles.container}>
            <div>LOGO</div>
            <ul className={styles.link}>
                <li>元宇宙</li>
                <li>NFT展示</li>
                <li>證書存放</li>
                <li>課程簡介</li>
            </ul>
            <div>Login</div>
        </nav>
    )
}