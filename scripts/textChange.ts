import Typed from "typed.js";
import React from "react";

function Typed1() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed1 = new Typed(el.current, {
            strings: ["DEVELOP", "DESIGN", "BUILD"],
            typeSpeed: 100,
            backDelay: 1000,
            backSpeed: 1000,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed1.curLoop;
        };
    }, []);
}

function Typed2() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed2 = new Typed(el.current, {
            strings: ["PROJECT", "APP", "DAPP", "WEBSITE", "BRAND", "COMMUNITY"],
            typeSpeed: 100,
            backDelay: 1000,
            backSpeed: 1000,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed2.destroy();
        };
    }, []);
}
