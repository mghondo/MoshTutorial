import { useState } from "react";

// {items: [], heading: string}
interface Props {
    items: string[];
    heading: string;
    // (items: string) => void
    onSelectItem: (items:string)=> void; 
}

function ListGroup({items, heading, onSelectItem}: Props){


const [selectedIndex, setSelectedIndex] = useState(-1);

    // Event Handler
 
    return (

        <>
            <h1>{heading}</h1>
            <h1>{items.length === 0 && <p>No Items Found</p>}</h1>
            <ul className="list-group">
                {items.map((item, index)=> 
                <li 
                onClick={() => {setSelectedIndex(index); onSelectItem(item)}}
                key={item} 
                className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}>{item}</li>)}
            </ul>
        </>

    
    
    )
    
}

export default ListGroup;