import React from "react";
import Link from "next/link";
import styles from "./NotFound.module.scss";

const NotFoundPage = () => {
    return (
        <div className={styles.container}>
            <h1>404 - Page Not Found</h1>
            <p>The page you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/">Go back</Link>
        </div>
    );
};

export default NotFoundPage;
