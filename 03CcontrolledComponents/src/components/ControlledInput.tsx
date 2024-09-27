import React, { FC, useState, useId } from 'react';
import styles from './ControlledInput.module.css';

type ControlledInputProps = {
    label: string;
    defaultValue: number;
    onChange: (value: number) => void;
}

const ControlledInput: FC<ControlledInputProps> = ({label, defaultValue, onChange}) => {
    const [value, setValue] = useState<number>(defaultValue);
    const id = useId();
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) >= 0) {
        setValue(Number(e.target.value));
        }
    };
    
    return (
        <div className={styles.container}>
            <label htmlFor={id}>{label}</label>
            <input type="range" value={value} id={id} onChange={handleChange} max={1000} min={0} />
            <span className={styles.result}>{value}</span>
            <button onClick={() => onChange(value)} className={styles.button}>Submit</button>
        </div>
    );
    }

export default ControlledInput;