import Image from "next/image";
import styles from "./page.module.css";
import { Player } from "./components/Player/player";

export default function Home() {
    return (
        <main className={styles.main}>
            <Player />
        </main>
    );
}
