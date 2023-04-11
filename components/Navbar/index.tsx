import Image from 'next/image'
import styles from './_Navbar.module.scss'
import logo from '/public/images/logo.png'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'

export default function Navbar() {
    return (
        <nav className={styles.container}>
            <Link href={'/'} className={styles.logo}>
                <Image src={logo} alt="logo" />
            </Link>
            <ul className={styles.link}>
                <Link href={'https://www.muse.place/stemetageeco'}><li>元宇宙</li></Link>
                <Link href={'/'}><li>NFT展示</li></Link>
                <Link href={'/'}><li>證書存放</li></Link>
                <Link href={'/course'}><li>課程簡介</li></Link>
            </ul>
            <span className={styles.menu}>
                <FiMenu />
            </span>
        </nav>
    )
}