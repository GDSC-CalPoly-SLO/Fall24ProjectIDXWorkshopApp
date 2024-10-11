import Link from "next/link";
import styles from "@/styles/navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.navContainer}>
            <Link className={styles.navLink} href="/home/page">Home</Link>
            <Link className={styles.navLink} href="/help/page">Help</Link>
            <Link className={styles.navLink} href="/account/page">Account</Link>
        </div>
    )
}