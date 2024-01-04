"use client";
import Typewriter from "react-typewriter-animate";
import "react-typewriter-animate/dist/Typewriter.css";
import React from "react";
import styles from "../src/app/css/style.module.css";

export class TypyingEffect1 extends React.Component {
    render() {
        return (
            <div className={`root ${styles.textColor2}`}>
                <Typewriter
                    dataToRotate={[
                        // Banner 1
                        [{ type: "word", text: " DEVELOP", cursor: { char: "_" } }],
                        // Banner 2
                        [{ type: "word", text: " DESIGN", cursor: { char: "_" } }],
                        // Banner 3
                        [{ type: "word", text: " BUILD", cursor: { char: "_" } }],
                    ]}
                    loop
                />
            </div>
        );
    }
}

export class TypyingEffect2 extends React.Component {
    render() {
        return (
            <div className={`root ${styles.textColor2}`}>
                <Typewriter
                    dataToRotate={[
                        // Banner 1
                        [{ type: "word", text: " PROJECT", cursor: { char: "_" } }],
                        // Banner 2
                        [{ type: "word", text: " APP", cursor: { char: "_" } }],
                        // Banner 3
                        [{ type: "word", text: " DAPP", cursor: { char: "_" } }],
                        // Banner 4
                        [{ type: "word", text: " WEBSITE", cursor: { char: "_" } }],
                        // Banner 5
                        [{ type: "word", text: " BRAND", cursor: { char: "_" } }],
                        // Banner 6
                        [{ type: "word", text: " COMMUNITY", cursor: { char: "_" } }],
                    ]}
                    loop
                />
            </div>
        );
    }
}

export class TypyingEffect3 extends React.Component {
    render() {
        return (
            <div className={`root ${styles.textColor2}`}>
                <Typewriter
                    dataToRotate={[
                        // Banner 1
                        [{ type: "word", text: "WEB2", cursor: { char: "_" } }],
                        // Banner 2
                        [{ type: "word", text: "WEB3", cursor: { char: "_" } }],
                    ]}
                    loop
                />
            </div>
        );
    }
}
