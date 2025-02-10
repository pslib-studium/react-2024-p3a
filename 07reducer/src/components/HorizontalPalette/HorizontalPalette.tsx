import React from 'react';
import { useStyleContext } from '../../providers/StyleProvider';

type HorizontalPaletteProps = {};

const HorizontalPalette: React.FC<HorizontalPaletteProps> = () => {
    const [{ palette }] = useStyleContext();

    return (
        <div className="horizontal-palette">
            {palette && palette.map((color, index) => (
                <div
                    key={index}
                    className="horizontal-palette__color"
                    style={{ backgroundColor: color }}
                >X</div>
            ))}
        </div>
    );
}

export default HorizontalPalette;