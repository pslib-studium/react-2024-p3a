import React, {FC, type ReactNode} from 'react'

type SequenceProps = {
    first: number;
    step: number;
    count: number;
    isDone: () => void;
}

const Sequence:FC<SequenceProps> = ({first = 5, step = 5, count = 8, isDone}) => {

    const data: Array<ReactNode> = []
    
    for (let i=0; i < count; i+=1) {
        data.push(<li key={i}>{first + i * step}</li>)    
    }
    isDone()
    return (
        <ul>
            {data}
        </ul>)
}

export default Sequence;