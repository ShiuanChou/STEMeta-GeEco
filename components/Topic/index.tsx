import Image from 'next/image'
import styles from './_Topic.module.scss'
import p1 from '/public/images/01.jpg'

const data = [
    {
        title: 'NFT學習旅程展示區',
        content: '創造出一個有效的數位動力系統 ，使學生在完成課程或獲得成就時，可以獲得相應的NFT作為獎勵。',
        link: '/course',
        id: 'nft'
    },
    {
        title: 'Metaverse互動體驗',
        content: '透過元宇宙遊戲化教育提供一種在學習過程中提供更有趣、更吸引人的教育體驗，沉浸式學習提升學習動機，高度互動加強學科知識內化。',
        link: 'https://www.muse.place/stemetageeco',
        id: 'metaverse'
    },
    {
        title: '性平ChatGPT',
        content: '通過與女性進行對談，可以了解她們對 STEM 領域的興趣和擔憂及時解決所需要的理解與陪伴，幫助女性解決她們在 STEM 領域的疑慮和困難。',
        link: 'https://www.google.com/',
        id: 'chatgpt'
    },
    {
        title: '策展專區',
        content: '在元宇宙中策劃性別平等主題展覽，提高公眾對性別平等議題的關注和認識。',
        link: 'https://www.google.com/',
        id: 'demo'
    },
    {
        title: '沉浸式遊戲化課程介紹',
        content: '多種型式教材呈現，達到最理想的教學要望；提供完整的備課、課堂管理及派發作業功能，讓課前到課中課後皆能輕鬆掌控。',
        link: 'https://www.google.com/',
        id: 'game'
    },
]

export default function Topic() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>TITLE</h1>
            <div className={styles.topic}>
                {data.map((item, index) => {
                    return (
                        <a href={item.link} key={index}>
                            <div className={`${styles.item} ${styles[item.id]}`}>
                                <h2>{item.title}</h2>
                                <span>{item.content}</span>
                            </div>
                        </a>
                    )
                }
                )}
            </div>
        </section >
    )
}