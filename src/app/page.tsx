import Image from "next/image";
import Head from "next/head";
import styles from "./css/style.module.css";
import LogoName from "./public/imgs/logo-name.png";
import { TypyingEffect1, TypyingEffect2, TypyingEffect3 } from "../../components/textChange";
import "./layout";

export default function HomePage() {
    return (
        <html lang="en">
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/public/imgs/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/public/imgs/favicon-16x16.png"
                />
                <title>Akira Digital Solutions - Home</title>
            </Head>
            <body
                className={`${styles.main}`}
                style={{
                    background: "linear-gradient(to top left, #0d0903, #000000)",
                    color: "white",
                }}
            >
                <div className={styles.container01}>
                    <header className={`${styles.headerContainer} container-fluid p-3 px-5`}>
                        <div>
                            <Image
                                id="logo"
                                src={LogoName}
                                alt="logo-name.png"
                                style={{ width: "100px", height: "auto" }}
                            />
                        </div>

                        <div className={`${styles.containerFlex} py-3`}>
                            <a
                                className={`px-1 ${styles.textColor}`}
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                TEAM
                            </a>
                            <a
                                className={`px-1 ${styles.textColor2}`}
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                SERVICES
                            </a>
                            <a
                                className={`px-1 ${styles.textColor}`}
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                ABOUT
                            </a>
                            <a
                                className={`px-1 ${styles.textColor}`}
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                CONTACT
                            </a>
                            <a
                                className={`px-1 ${styles.textColor}`}
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                EN | PT-BR
                            </a>
                        </div>
                    </header>
                    <div className={`${styles.container02} container-fluid`}>
                        <div className={`${styles.initialText}`}>
                            <div className={styles.initialTextFlex}>
                                <TypyingEffect1 />
                            </div>
                            <div className={styles.initialTextFlex}>
                                BUILD YOUR ‎ <TypyingEffect2 />
                            </div>
                            <div className={styles.initialTextFlex}>
                                BRING YOUR ‎ <TypyingEffect3 /> ‎ BUSINESS TO REALITY
                            </div>
                            <div></div>
                        </div>
                        <div className={`${styles.videoContainer} container-fluid`}>
                            <video className={styles.video} muted loop autoPlay>
                                <source
                                    src={require("/src/app/public/video/brand-video-final.mp4")}
                                />
                            </video>
                        </div>
                    </div>
                </div>
                <div className={`${styles.container02} container-fluid`}>
                    <div style={{ color: "white" }}>
                        <h2>YOUR HIRING PROBLEMS ARE OVER</h2>HERE YOU CAN FIND ALL SOLUTIONS IN
                        JUST 1 PLACE
                    </div>
                    <a
                        type="button"
                        className="btn btn-warning"
                        href="https://calendly.com/akira-digital-solutions/30min"
                    >
                        Book a Meeting
                    </a>
                </div>
                <footer></footer>
            </body>
        </html>
    );
}
