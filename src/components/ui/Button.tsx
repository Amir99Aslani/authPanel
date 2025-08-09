'use client'

import React, {ButtonHTMLAttributes, forwardRef} from "react";
import styles from "./Button.module.scss";

type buttonProps = {
    text: string,
    loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, buttonProps>(
    (
        {text , loading, ...props}: buttonProps,
        ref: React.Ref<HTMLButtonElement>
    ) => {
        return (
            <div className={styles.buttonWrapper}>
                <button className={styles.button} ref={ref}  {...props}
                        disabled={loading || props.disabled}
                >
                    {loading ? 'Loading...' : text}
                </button>
            </div>
        )
    }
);

Button.displayName = "Button";

export default Button;