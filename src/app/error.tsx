"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Error = ({ error }: { error: Error & { digest?: string } }) => {
    const router = useRouter();

    useEffect(() => {
        console.error("App Error:", error);

        localStorage.removeItem("user");

        const timeout = setTimeout(() => {
            router.push("/");
        }, 3000);

        return () => clearTimeout(timeout);
    }, [error, router]);

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>Something went wrong</h1>
            <p>Redirecting...</p>
        </div>
    );
};

export default Error;
