import Link from "next/link";
import styles from "@/styles/navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.navContainer}>
            <Link className={styles.navLink} href="/home/page">Home</Link>
            <Link className={styles.navLink} href="/task/tasks">Tasks</Link>
            <Link className={styles.navLink} href="/task/addTasks">Add Tasks</Link>
        </div>
    )
}