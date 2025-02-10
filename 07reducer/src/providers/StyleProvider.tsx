import React, { createContext, useContext, useReducer } from "react";

type Palette = {name: string, colors: Array<string>};

const palettes: Array<Palette> = [
    {
        name: "Default",
        colors: ["#FF0000", "#00FF00", "#0000FF"],
    },
    {
        name: "Grayscale",
        colors: ["#000000", "#333333", "#666666", "#999999", "#CCCCCC", "#FFFFFF"],
    },
    {
        name: "Rainbow",
        colors: ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"],
    },
    {
        name: "Ocean",
        colors: ["#000080", "#0000FF", "#4682B4", "#87CEEB", "#B0E0E6", "#ADD8E6", "#87CEFA"],
    }
];

export type StyleState = {
  palette: Array<string> | null,
  color: string,
  spacing: number
};

type StyleAction =
  | { type: "SET_COLOR"; value: string }
  | { type: "SET_RANDOM_COLOR" }
  | { type: "SET_PALETTE"; values: Array<string> }
  | { type: "SET_PALETTE_BY_NAME"; value: string }
  | { type: "CLEAR_PALETTE" }
  | { type: "SET_SPACING"; value: number }
  | { type: "ROTATE_PALETTE"; value: number }
  | { type: "INCREASE_SPACING"; value: number }
  | { type: "DECREASE_SPACING"; value: number }
;

const reducer = (state: StyleState, action: StyleAction): StyleState => {
  switch (action.type) {
    case "SET_COLOR":
        return { ...state, color: action.value };
    case "SET_RANDOM_COLOR":
        return { ...state, color: "#" + Math.floor(Math.random() * 16777215).toString(16) };
    case "SET_PALETTE":
        return { ...state, palette: action.values };
    case "SET_PALETTE_BY_NAME": {
        const palette = palettes.find((palette) => palette.name === action.value);
        return { ...state, palette: palette ? palette.colors : null };
    }
    case "CLEAR_PALETTE":
        return { ...state, palette: null };
    case "SET_SPACING":
        return { ...state, spacing: action.value };
    case "ROTATE_PALETTE":
        if (state.palette) {
            const palette = [...state.palette];
            const value = action.value % palette.length;
            return { ...state, palette: [...palette.slice(value), ...palette.slice(0, value)] };
        }
        return state;
    case "INCREASE_SPACING":
        return { ...state, spacing: state.spacing + action.value };
    case "DECREASE_SPACING":
        return { ...state, spacing: Math.max(0, state.spacing - action.value) };
    default:
      return state;
  }
};

const initialState: StyleState = {
    palette: null,
    color: "white",
    spacing: 0,
};

export const StyleContext = createContext<
  [StyleState, React.Dispatch<StyleAction>]
>([initialState, () => {}]);
export const useStyleContext = () => useContext(StyleContext);

export const StyleProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const state = useReducer(reducer, initialState);
  return (
    <StyleContext.Provider value={state}>{children}</StyleContext.Provider>
  );
};

export default StyleContext;