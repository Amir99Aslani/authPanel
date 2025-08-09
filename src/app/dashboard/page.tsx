"use client";

import {useEffect, useState} from "react";
import styles from "./Dashboard.module.scss";
import Button from "@/components/ui/Button";
import {toast} from "sonner";
import {useRouter} from "next/navigation";

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


export default function Page() {

    const router = useRouter();

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
            if (storedUser) {
                const user = JSON.parse(storedUser);
                if (!user.picture.large) {
                    localStorage.removeItem("user");
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
                <div className={styles.infoContainer}>
                    <p className={styles.info}>
                        <span className={styles.title}>Email:</span>
                        <span className={styles.value}>{user.email}</span>
                    </p>
                    <p className={styles.info}>
                        <span className={styles.title}>Username:</span>
                        <span className={styles.value}>{user.login.username}</span>
                    </p>
                    <p className={styles.info}>
                        <span className={styles.title}>Phone:</span>
                        <span className={styles.value}>{user.phone}</span>
                    </p>
                    <p className={styles.info}>
                        <span className={styles.title}>Cell:</span>
                        <span className={styles.value}>{user.cell}</span>
                    </p>
                    <p className={styles.info}>
                        <span className={styles.title}>Location:</span>
                        <span
                            className={styles.value}>{user.location.city}, {user.location.state}, {user.location.country}</span>
                    </p>
                    <p className={styles.info}>
                        <span className={styles.title}>Age:</span>
                        <span className={styles.value}>{user.dob.age}</span>
                    </p>
                    <p className={styles.info}>
                        <span className={styles.title}>Nationality:</span>
                        <span className={styles.value}>{user.nat}</span>
                    </p>
                </div>
                <Button text="Logout" type="button"
                        onClick={() => {
                            toast.success('Logout successfully !')
                            setTimeout(() => {
                                router.push('/');
                                localStorage.removeItem("user");
                            }, 2000);
                        }}
                />
            </div>
        </div>
    );
}