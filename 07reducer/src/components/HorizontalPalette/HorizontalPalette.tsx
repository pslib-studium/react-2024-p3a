import React from 'react';
import { useStyleContext } from '../../providers/StyleProvider';
import ColorSquare from '../ColorSquare/ColorSquare';
import styles from './HorizontalPalette.module.css';

type HorizontalPaletteProps = {};

const HorizontalPalette: React.FC<HorizontalPaletteProps> = () => {
    const [{ palette, color }] = useStyleContext();

    return (
        <div className={styles["horizontal-palette"]}>
            {palette && palette.map((bg, index) => (
                <ColorSquare key={index} color={color} background={bg} />
            ))}
        </div>
    );
}

export default HorizontalPalette;