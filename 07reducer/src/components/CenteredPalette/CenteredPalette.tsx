import styles from './CenteredPalette.module.css';
import { useStyleContext } from '../../providers/StyleProvider';

const NestedDivs: React.FC<{ colors: string[]; index?: number }> = ({ colors, index = 0 }) => {
    const [{ color, spacing }] = useStyleContext();
    if (index >= colors.length) {
        return <div style={{color: color}}>{color}</div>;
    }

    return (
        <div className={styles.segment} style={{ backgroundColor: colors[index], padding: spacing }}>
            <NestedDivs colors={colors} index={index + 1} />
        </div>
    );
};


type CenteredPaletteProps = {};

const CenteredPalette: React.FC<CenteredPaletteProps> = () => {
    const [{ palette }] = useStyleContext();

    if (!palette || palette.length === 0) return null;    
    return (
        <div className={styles["centered-palette"]}>
            <NestedDivs colors={palette} />
        </div>
    );
}

export default CenteredPalette;