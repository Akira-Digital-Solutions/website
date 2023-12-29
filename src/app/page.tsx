import Image from "next/image";
import styles from "./css/style.module.css";
import LogoName from "../../public/imgs/logo-name.png";
//import VideoBg from "../../public/video/akira-intro.mp4";
import "./layout";

export default function Home() {
    return (
        <html lang="en">
            <head>
                <title>Akira Digital Solutions - Home</title>
            </head>
            <body
                className={`${styles.main}`}
                style={{ background: "linear-gradient(to top left, #0d0903, #000000)" }}
            >
                <div>
                    <header className={`${styles.container01} container-fluid p-3 px-5`}>
                        <div>
                            <Image
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
