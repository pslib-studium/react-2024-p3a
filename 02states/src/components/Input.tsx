import {FC, useRef} from 'react';

type InputProps = {
    initial: number;
    changeAction: (value: number) => void;
}

const Input:FC<InputProps> = ({initial, changeAction}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
    <div>
        {/* Add an input element with type number and a default value of initial. */}
        <input ref={inputRef} type="number" defaultValue={initial} />
        <button onClick={() => changeAction(inputRef.current ? parseInt(inputRef.current?.value) : 0)}>
            Change
        </button>
    </div>
)}

export default Input;