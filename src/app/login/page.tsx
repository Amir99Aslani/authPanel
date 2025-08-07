'use client';

import { useFormik } from 'formik';
import { loginSchema } from '@/lib/validation';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import styles from './Login.module.scss';
import { useRouter } from 'next/navigation';
import {useEffect} from "react";

export default function LoginPage() {
    const router = useRouter();

    const formik = useFormik({
        initialValues: { phone: '' },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            try {
                const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
                const data = await res.json();
                const user = data?.results[0];
                console.log(user)

                localStorage.setItem('user', JSON.stringify(user));
                router.push('/dashboard');

            } catch (err) {
                console.error('login failed:', err);
            }
        },
    });

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            router.replace('/dashboard');
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <form onSubmit={formik.handleSubmit} className={styles.form}>
                <h1>Login</h1>
                <Input
                    label="Phone Number"
                    name="phone"
                    type="text"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phone ? formik.errors.phone : undefined}
                />
                <Button text="Login" type="submit" />
            </form>
        </div>
    );
}
