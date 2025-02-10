import React from "react";
import { useStyleContext } from "../../providers/StyleProvider";

type PaletteControlProps = {};

const PaletteControl: React.FC<PaletteControlProps> = () => {
    const [{ palette }, dispatch] = useStyleContext();

    const setRandomColor = () => {
        dispatch({ type: "SET_RANDOM_COLOR" });
    };

    const clearPalette = () => {
        dispatch({ type: "CLEAR_PALETTE" });
    };

    const loadPalette = (name: string) => {
        dispatch({ type: "SET_PALETTE_BY_NAME", value: name });
    };

    return (
        <div className="palette-control">
            <button onClick={setRandomColor}>Random Color</button>
            <button onClick={clearPalette}>Clear Palette</button>
            <button onClick={() => loadPalette("Default")}>Default Palette</button>
            <button onClick={() => loadPalette("Grayscale")}>Grayscale Palette</button>
        </div>
    );
}

export default PaletteControl;