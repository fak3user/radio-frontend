"use client";

import React, { useEffect, useState } from "react";
import ReactHlsPlayer from "@gumlet/react-hls-player";
import styles from "./player.module.css";

export const Player = () => {
    const playerRef = React.useRef();
    const [status, updateStatus] = useState("pause");

    function handleHlsObject(hls) {
        console.log(hls);
    }

    function handlePlayVideo() {
        updateStatus("play");
        playerRef.current.play();
    }

    function handlePauseVideo() {
        updateStatus("pause");
        playerRef.current.pause();
    }

    console.log(status);

    return (
        <div className={styles.wrapper}>
            <ReactHlsPlayer
                autoPlay
                width={"100%"}
                playerRef={playerRef}
                controls
                getHLSRef={handleHlsObject}
                src="http://188.166.97.181:8888/test/index.m3u8"
                // src="http://localhost:8888/test/index.m3u8"
            />
        </div>
    );
};
