"use client";

import { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";

interface User {
    name: { first: string; last: string };
    email: string;
    phone: string;
    cell: string;
    nat: string;
    dob: { age: number };
    location: { city: string; state: string; country: string };
    login: { username: string };
    picture: { large: string };
}


export default function Page(props) {

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                try {
                    setUser(JSON.parse(storedUser));
                } catch (e) {
                    console.error("Failed to parse user from localStorage", e);
                }
            }
        }
    }, []);

    if (!user) {
        return <p className={styles.loading}>Loading user data...</p>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img
                    src={user.picture.large}
                    alt={`${user.name.first} ${user.name.last}`}
                    className={styles.avatar}
                />
                <h2 className={styles.name}>
                    {user.name.first} {user.name.last}
                </h2>
                <p className={styles.info}><strong>Email:</strong> {user.email}</p>
                <p className={styles.info}><strong>Username:</strong> {user.login.username}</p>
                <p className={styles.info}><strong>Phone:</strong> {user.phone}</p>
                <p className={styles.info}><strong>Cell:</strong> {user.cell}</p>
                <p className={styles.info}>
                    <strong>Location:</strong> {user.location.city}, {user.location.state}, {user.location.country}
                </p>
                <p className={styles.info}><strong>Age:</strong> {user.dob.age}</p>
                <p className={styles.info}><strong>Nationality:</strong> {user.nat}</p>
            </div>
        </div>
    );
}