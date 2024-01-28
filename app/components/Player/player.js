"use client";

import React, { useEffect, useState } from "react";
import ReactHlsPlayer from "@gumlet/react-hls-player";
import styles from "./player.module.css";

export const Player = ({ url }) => {
    const playerRef = React.useRef();
    const [status, updateStatus] = useState("pending");

    useEffect(() => {
        fetch(url).then((res) => {
            updateStatus(res.ok ? "online" : "offline");
        });
    }, []);

    function handleHlsObject(hls) {
        console.log(hls);
        // hls.streamController.onvplaying(() => {
        // console.log(123);
        // });
    }

    return (
        <div className={styles.wrapper}>
            {status === "online" ? (
                <ReactHlsPlayer
                    autoPlay
                    width={"100%"}
                    playerRef={playerRef}
                    controls
                    getHLSRef={handleHlsObject}
                    src={url}
                />
            ) : (
                <p className={styles.offline}>
                    {status === "pending" ? "loading" : "offline"}
                </p>
            )}
        </div>
    );
};
