import Image from "next/image";
import styles from "./css/style.module.css";
import LogoName from "../../public/imgs/logo-name.png";
import { TypyingEffect1, TypyingEffect2, TypyingEffect3 } from "../../components/textChange";
import "./layout";

export default function Home() {
    return (
        <html lang="en">
            <head>
                <title>Akira Digital Solutions - Home</title>
            </head>
            <body
                className={`${styles.main}`}
                style={{
                    background: "linear-gradient(to top left, #0d0903, #000000)",
                    color: "white",
                }}
            >
                <div>
                    <header className={`${styles.container01} container-fluid p-3 px-5`}>
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
                    <div>
                        <div className={`${styles.videoContainer} container-fluid`}>
                            <div className={styles.initialText}>
                                <div className="d-flex flex-row">
                                    <TypyingEffect1 />
                                </div>
                                <div className="d-flex flex-row">
                                    <span style={{ fontSize: "25px" }}>BUILD YOUR ‎</span>
                                    <TypyingEffect2 />
                                </div>
                                <div className="d-flex flex-row">
                                    <span style={{}}>BRING YOUR ‎</span> <TypyingEffect3 /> BUSINESS
                                    TO REALITY
                                </div>
                            </div>
                            <video
                                src={require("/public/video/videoBgV2.mp4")}
                                className={styles.video}
                                muted
                                autoPlay
                            />
                        </div>
                    </div>
                </div>
                <footer></footer>
            </body>
        </html>
    );
}
