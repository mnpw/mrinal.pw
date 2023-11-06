import Layout from "../../components/layout"
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import { useState } from "react";
import Clipboard from 'react-clipboard.js';
import styles from '../../components/layout.module.css'
import Flower from "../../components/Flower"
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { Suspense } from 'react'

import { DebugLayerMaterial, LayerMaterial, Depth, Color, Fresnel, Noise, Normal } from 'lamina'


export default function Posts() {
    const props = { base: '#ff4eb8', colorA: '#00ffff', colorB: '#ff00e3' }

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
                <li className={utilStyles.listItem}>📝 wrote a new essay! - <Link href="/engineering-process/" target="_blank" rel="noopener">engineering: the creative process</Link></li>
                <li className={utilStyles.listItem}>🦀 performing surgery on crabs (read: <Link
                    href="http://smallcultfollowing.com/babysteps/blog/2018/04/27/an-alias-based-formulation-of-the-borrow-checker/"
                    target="_blank"
                    rel="noopener">learning</Link> about the history and the future of rust's borrow checker)
                </li>
                <li className={utilStyles.listItem}>📖 finished reading Replay by Ken Grimwood. my thoughts <Link href="/replayed/" target="_blank" rel="noopener">here</Link> <span className={utilStyles.update_disc}>✱</span></li>
                <li className={utilStyles.listItem}>🔮 thinking about the role of compaction in long games, practicing crystallization</li>
                <li className={utilStyles.listItem}><div>🧰 applying to jobs!&nbsp;
                    <Link
                        href="https://twitter.com/messages/compose?recipient_id=3446109433&text=hey"
                        className="twitter-dm-button"
                        data-screen-name="@_mnpw"
                        target="_blank"
                        rel="noopener">

                        DM

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
                            📺 <Link
                                href="https://www.youtube.com/watch?v=i2FPU7bKD9k"
                                target="_blank"
                                rel="noopener">video</Link>: When we build - Wilson Miner
                        </li>
                        <li >
                            📻 <Link
                                href="https://open.spotify.com/episode/7aocExFm5uQxxF7YxFhP5X"
                                target="_blank"
                                rel="noopener">podcast</Link>: Tyler and Daniel Gross Talk Talent <span className={utilStyles.update_disc}>✱</span>
                        </li>
                        <li >
                            📜 <Link href="https://www.benkuhn.net/outliers/" target="_blank" rel="noopener">essay</Link>: Searching for outliers - Ben Kuhn
                        </li>
                        <li >
                            🎶 <Link
                                href="https://open.spotify.com/track/6Rkp6fEsvOTR7YxsW5uNyR"
                                target="_blank"
                                rel="noopener">music</Link>: My Friend the Forest - Nils Frahm <span className={utilStyles.update_disc}>✱</span>
                        </li>
                    </ul>
                </li>
            </ul>

            {/* <div className={utilStyles.canvas}>
                <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0.5, 10], fov: 2 }}>
                    <Suspense fallback={null}>
                        <Flower {...props} />
                        <Bg {...props} />
                        <OrbitControls />
                        <directionalLight intensity={2} castShadow shadow-mapSize-height={1024} shadow-mapSize-width={1024} />
                        <ambientLight intensity={0.4} />
                    </Suspense>
                </Canvas>
            </div> */}
        </Layout >
    );
}