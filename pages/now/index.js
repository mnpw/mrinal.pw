import Layout from "../../components/layout"
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import { useState } from "react";
import Clipboard from 'react-clipboard.js';
import styles from '../../components/layout.module.css'


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
                <h3 className={utilStyles.headingMd}>Updated on 6 June 2022 <span className={utilStyles.update_disc}>✱</span></h3>
            </div>
            <ul className={utilStyles.list}>
                <li className={utilStyles.listItem}>
                    🏡 living in Delhi, India
                </li>
                <li className={utilStyles.listItem}>🏃🏻‍♂️ completed running 100km so far this year <span className={utilStyles.update_disc}>✱</span></li>
                <li className={utilStyles.listItem}>📝 wrote a new essay! - <Link href="/engineering-process/"><a target="_blank" rel="noopener">engineering: the creative process</a></Link></li>
                <li className={utilStyles.listItem}>🦀 performing surgery on crabs (read: <Link href="http://smallcultfollowing.com/babysteps/blog/2018/04/27/an-alias-based-formulation-of-the-borrow-checker/"><a target="_blank" rel="noopener">learning</a></Link> about the history and the future of rust's borrow checker)
                </li>
                <li className={utilStyles.listItem}>📖 finished reading Replay by Ken Grimwood. my thoughts <Link href="/replayed/"><a target="_blank" rel="noopener">here</a></Link> <span className={utilStyles.update_disc}>✱</span></li>
                <li className={utilStyles.listItem}>🔮 thinking about the role of compaction in long games, practicing crystallization</li>
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
                <li className={utilStyles.listItem}>
                    💛 some important things i recently consumed:
                    <ul>
                        <li >
                            📺 <Link href="https://www.youtube.com/watch?v=i2FPU7bKD9k"><a target="_blank" rel="noopener">video</a></Link>: When we build - Wilson Miner
                        </li>
                        <li >
                            📻 <Link href="https://open.spotify.com/episode/7aocExFm5uQxxF7YxFhP5X"><a target="_blank" rel="noopener">podcast</a></Link>: Tyler and Daniel Gross Talk Talent <span className={utilStyles.update_disc}>✱</span>
                        </li>
                        <li >
                            📜 <Link href="https://www.benkuhn.net/outliers/"><a target="_blank" rel="noopener">essay</a></Link>: Searching for outliers - Ben Kuhn
                        </li>
                        <li >
                            🎶 <Link href="https://open.spotify.com/track/6Rkp6fEsvOTR7YxsW5uNyR"><a target="_blank" rel="noopener">music</a></Link>: My Friend the Forest - Nils Frahm <span className={utilStyles.update_disc}>✱</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </Layout >
    )
}