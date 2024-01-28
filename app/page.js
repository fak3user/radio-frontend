import Image from "next/image";
import styles from "./page.module.css";
import { Player } from "./components/Player/player";

export default function Home() {
    return (
        <main className={styles.main}>
            <Player
                src="http://188.166.97.181:8888/test/index.m3u8"
                // url="http://localhost:8888/test/index.m3u8"
            />
        </main>
    );
}
