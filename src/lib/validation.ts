import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    phone: Yup.string()
        .matches(/^09\d{9}$/, 'Phone number must start with 09 and be 11 digits long !')
        .required('Phone number is required !'),
});

export type LoginFormValues = {
    phone: string;
};
