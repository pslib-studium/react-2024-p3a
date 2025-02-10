import {useStyleContext} from '../../providers/StyleProvider';
import styles from './ColorSquare.module.css';

type ColorSquareProps = {
    color: string;
    background: string;
    };

const ColorSquare: React.FC<ColorSquareProps> = ({ color, background }) => {
    const [{ spacing }] = useStyleContext();
    return (
        <div className={styles.square} style={{ color: color, backgroundColor: background, padding: spacing }}>
            {background}
        </div>
    );
}

export default ColorSquare;