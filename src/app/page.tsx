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
            <body className={`${styles.main}`} style={{ backgroundColor: "black" }}>
                <div>
                    <header className={`${styles.container01} container-fluid pt-3`}>
                        <div>
                            <Image
                                src={LogoName}
                                alt="logo-name.png"
                                style={{ width: "100px", height: "auto" }}
                            />
                        </div>

                        <div className={`${styles.containerFlex}`}>
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
                    <video
                        src={require("/public/video/akira-intro.mp4")}
                        className={styles.video}
                        muted
                        autoPlay
                    />
                </div>
                <footer></footer>
            </body>
        </html>
    );
}
