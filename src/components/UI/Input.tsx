import React, {forwardRef, InputHTMLAttributes} from 'react';
import styles from './Input.module.scss';

type InputProps = {
    label?: string;
    error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        { label, error, ...props }: InputProps,
        ref: React.Ref<HTMLInputElement>
    ) => {
        return (
            <div className={styles.inputWrapper}>
                {label && <label className={styles.label}>{label}</label>}
                <input ref={ref} className={styles.input} {...props} />
                {error && <span className={styles.error}>{error}</span>}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
