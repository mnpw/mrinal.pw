import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import logo_2 from '../public/website_logo.svg'
import logo_1 from '../public/dp.png'
import { useState } from 'react'

const name = 'Mrinal Paliwal'
export const siteTitle = 'mnpw\'s garden'

export default function Layout({ children, home }) {

    const logo1 = { src: logo_1, width: 34, height: 34 }
    const logo2 = { src: logo_2, width: 80, height: 34 }

    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="This is the garden looked after by Mrinal Paliwal"
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <header className={styles.header}>
                <Link href="/">
                    {/* onMouseOver={() => changeLogo(logo2)} onMouseOut={() => changeLogo(logo1)} */}
                    <div className={styles.logo}>
                        <span className={styles.logo_hover}>
                            <Image src={logo2.src} height={logo2.height} width={logo2.width} />
                        </span>
                        <span className={styles.logo_base}>
                            <Image className={styles.logo_base} src={logo1.src} height={logo1.height} width={logo1.width} />
                        </span>
                    </div>
                </Link>
                <span>
                    <Link href="/now/" ><a className={styles.navbar}>Now</a></Link>
                    <span className={styles.disc}> •</span>
                    <Link href="/notes/" ><a className={styles.navbar}>Notes</a></Link>
                    <span className={styles.disc}> •</span>
                    <Link href="https://www.twitter.com/_mnpw"><a className={styles.navbar}>Twitter</a></Link>
                </span>
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}
