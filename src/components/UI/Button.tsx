import React, {ButtonHTMLAttributes, forwardRef} from "react";
import styles from "./Button.module.scss";

type buttonProps = {
    text: string,
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, buttonProps>(
    (
        {text, ...props}: buttonProps,
        ref: React.Ref<HTMLButtonElement>
    ) => {
        return (
            <div className={styles.buttonWrapper}>
                <button className={styles.button} ref={ref}  {...props} >
                    {text}
                </button>
            </div>
        )
    }
);

Button.displayName = "Button";

export default Button;