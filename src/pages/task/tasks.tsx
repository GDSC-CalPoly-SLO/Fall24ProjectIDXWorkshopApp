'use client'
import Navbar from "@/components/nav"
import styles from "@/styles/tasks.module.css";
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "@/scripts/firebaseConfig";
import Task from "@/components/task";
import React, { ReactElement, useState } from "react";

export default function TasksPage() {


    const [components, setComponents] = useState<ReactElement[]>([]);
    const componentArray: React.JSX.Element[] = [];

    const getData = async () => {
        const q = query(collection(db, "Tasks"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            componentArray.push(
                <Task task={doc.data().title}></Task>
            )
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        setComponents(componentArray);
    }
    //getData();



    return (
        <>
            <Navbar></Navbar>
            <h2 className={styles.title}>hello from the Tasks page</h2>
            <div className={styles.taskContainer}>
                <div className={styles.componentContainer}>{components}</div>
            </div>

        </>
    )
}