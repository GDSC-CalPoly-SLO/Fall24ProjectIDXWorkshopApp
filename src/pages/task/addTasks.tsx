import styles from "@/styles/addTasks.module.css";
import Navbar from "@/components/nav"
import { useState } from "react";

export default function AddTasks() {
    const [name, setName] = useState("");
    const [descrition, setDescription] = useState("");
    const [date, setDate] = useState("");

    console.log(name);
    return (
        <>
        <Navbar></Navbar>
        <div className={styles.PageContainer}>
            <div className={styles.formContainer}>
                <h1>Add Task</h1>
                <input type="text" onChange={(e) => {setName(e.target.value)}}/>
                <input type="text" />
                <input type="date" />
                <button>submit</button>
            </div>
        </div>
        </>
    )
}