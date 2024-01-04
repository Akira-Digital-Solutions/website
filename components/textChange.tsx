"use client";
import Typewriter from "react-typewriter-animate";
import "react-typewriter-animate/dist/Typewriter.css";
import React from "react";

export class TypyingEffect1 extends React.Component {
    render() {
        return (
            <div className="root">
                <Typewriter
                    dataToRotate={[
                        // Banner 1
                        [{ type: "word", text: "DEVELOP" }],
                        // Banner 2
                        [{ type: "word", text: "DESIGN" }],
                        // Banner 2
                        [{ type: "word", text: "BUILD" }],
                    ]}
                />
            </div>
        );
    }
}

export class TypyingEffect2 extends React.Component {
    render() {
        return (
            <div className="root">
                <Typewriter
                    dataToRotate={[
                        // Banner 1
                        [{ type: "word", text: "DEVELOP" }],
                        // Banner 2
                        [{ type: "word", text: "DESIGN" }],
                        // Banner 2
                        [{ type: "word", text: "BUILD" }],
                    ]}
                />
            </div>
        );
    }
}
