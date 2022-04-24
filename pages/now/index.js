import Layout from "../../components/layout"
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import { useState } from "react";
import Clipboard from 'react-clipboard.js';

export default function Posts() {
    let [emailVisible, setEmailVisible] = useState(false);
    let [copyState, setCopyState] = useState(false);
    let [timeOutId, setTimeOutId] = useState(0);

    const EMAIL_ID_MASKED = "mrinalpaliwal98 [+ gmail suffix]";
    const EMAIL_ID_UNMASED = "mrinalpaliwal98@gmail.com";

    const toggleEmail = () => {
        if (emailVisible) {
            clearTimeout(timeOutId);
        }

        if (!emailVisible) {
            let id = setTimeout(() => { setCopyState(false) }, 3000);
            setTimeOutId(id);
        }
        setEmailVisible(!emailVisible);
    }

    const copySuccess = () => {
        setCopyState(true);
    }

    return (
        <Layout>
            <h2 className={utilStyles.headingXl}>Now</h2>
            <div style={{ marginTop: "2rem", marginBottom: "1.2rem" }}>
                <h3 className={utilStyles.headingMd}>Updated on 24 April 2022</h3>
            </div>
            <ul className={utilStyles.list}>
                <li className={utilStyles.listItem}>
                    🏡 living in Dharamkot, India
                </li>
                <li className={utilStyles.listItem}>📝 finished writing an <Link href="/pushing-against-reality/"><a target="_blank" rel="noopener">essay</a></Link> </li>
                <li className={utilStyles.listItem}>🦀 learning rust, going through the rust book, worked on <Link href="https://github.com/mnpw/hashmap-rs"><a target="_blank" rel="noopener">hashmap-rs</a></Link> and working <Link href="https://github.com/mnpw/webserver-rs"><a target="_blank" rel="noopener">webserver-rs</a></Link>
                </li>
                <li className={utilStyles.listItem}>📖 got into reading, currently reading The Silent Patient</li>
                <li className={utilStyles.listItem}>🔮 thinking about how to play long term games, compaction and crystallization</li>
                <li className={utilStyles.listItem}><div>🧰 applying to jobs!&nbsp;
                    <Link href="https://twitter.com/messages/compose?recipient_id=3446109433&text=hey">
                        <a className="twitter-dm-button" data-screen-name="@_mnpw" target="_blank" rel="noopener">
                            DM
                        </a>
                    </Link> or&nbsp;
                    <Clipboard component="a" style={{ cursor: 'pointer' }} onClick={() => { toggleEmail() }} data-clipboard-text={EMAIL_ID_UNMASED} onSuccess={() => copySuccess()}>
                        Email
                    </Clipboard>
                    &nbsp;
                    {emailVisible &&
                        <span>
                            <span className={utilStyles.labelText}>
                                {EMAIL_ID_MASKED}
                                <span className={utilStyles.fade_out}>{copyState && " Copied! "}</span>
                            </span>
                        </span>
                    }
                    me if you think we should work together</div>
                </li>
                <li className={utilStyles.listItem}>🧗 planning another impossible trek and preparing my body for it</li>
                <li className={utilStyles.listItem}>
                    💛 some important things i recently consumed:
                    <ul>
                        <li >
                            📺 <Link href="https://www.youtube.com/watch?v=i2FPU7bKD9k"><a target="_blank" rel="noopener">video</a></Link>: When we build - Wilson Miner
                        </li>
                        <li >
                            📻 <Link href="https://open.spotify.com/episode/0d7nNkR9GK9PkjoFL48fl4"><a target="_blank" rel="noopener">podcast</a></Link>: Watering the Dead and the Unseen – Sumana Roy
                        </li>
                        <li >
                            📜 <Link href="https://www.benkuhn.net/outliers/"><a target="_blank" rel="noopener">essay</a></Link>: Searching for outliers - Ben Kuhn
                        </li>
                        <li >
                            🎶 <Link href="https://open.spotify.com/track/4HK3N5xqVguP5Sk583EazM"><a target="_blank" rel="noopener">music</a></Link>: Grieg: Peer Gynt (Death Of Aase) - Solomon Grey's Paradise Lost Rework
                        </li>
                    </ul>
                </li>
            </ul>
        </Layout >
    )
}