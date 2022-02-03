import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

const name = 'Mrinal Paliwal'
export const siteTitle = 'mnpw\'s garden'

export default function Layout({ children, home }) {
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
                <Link href="/"><span className={styles.home}>■</span></Link>
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
