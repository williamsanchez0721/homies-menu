// Food.tsx
'use client'
import { useState } from 'react'
import styles from './food.module.css'
import Image from 'next/image'
import Menu from '../components/menu/menu'
import Header from '../components/header/Header'
import Link from 'next/link'

export default function Food() {
    const [showMenu, setShowMenu] = useState(false)
    const [title, setTitle] = useState('Menú')
    const [image, setImage] = useState('niñosburger.jpg')

    const handleShowMenu = (title: string, image: string) => {
        setShowMenu(!showMenu)
        setTitle(title)
        setImage(image)

    }

    return (
        <>
            {/* <Header title={title} image='niñosburger.jpg' /> */}
                <section className={styles.section}>
                    <div className={styles.food__title}>
                            {/* <h1 className='montserrat-600'>Homies and family</h1> */}
                        </div>
                        <div className={styles.container}>
                            <div className={styles.card}>
                                <Link href="/burgers"><Image src="/epicBurger.png" alt="" width={300} height={100} className={styles.front__page} onClick={() => handleShowMenu('burgers', 'epicBurger.png')} /></Link>
                                <h2 className='montserrat-400'>Burgers</h2>
                            </div>
                            <div className={styles.card}>
                                <Link href="/homies_kids"><img src="/homieskids.jpg" alt="" width={300} height={70} className={styles.front__page} onClick={() => handleShowMenu('niños', 'homieskids.jpg')} /></Link>
                                <h2 className='montserrat-400'>Homies Kids</h2>
                            </div>
                            <div className={styles.card}>
                                <Link href="/bebidas"><img src="/bebida2.jpg" alt="" width={300} height={60} className={styles.front__page} onClick={() => handleShowMenu('bebidas', 'bebida2.jpg')} /></Link>
                                <h2 className='montserrat-400'>Bebidas</h2>
                            </div>
                            <div className={`${styles.card} ${styles.postre}`}>
                                <Link href="/malteadas"><img src="/postre.jpg" alt="" width={700} height={350} className={styles.front__page} onClick={() => handleShowMenu('malteadas', 'postre.jpg')} /></Link>
                                <h2 className='montserrat-400'>Malteadas</h2>
                            </div>
                            <div className={styles.card}>
                                <Link href="/adicionales"><img src="/adicionales2.jpg" alt="" width={300} height={70} className={styles.front__page} onClick={() => handleShowMenu('adicionales', 'adicionales2.jpg')} /></Link>
                                <h2 className='montserrat-400'>Adicionales</h2>
                            </div>
                        </div>
                    </section>
                </>
    )
}
