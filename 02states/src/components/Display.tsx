import {FC} from 'react';
import styles from './Display.module.css';

type DisplayProps = {
    show: string;
}

const Display:FC<DisplayProps> = ({show}) => (
    <div className={styles.bigDisplay}>
        {show}
    </div>
)

export default Display;