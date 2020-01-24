import {useState,useEffect} from 'react'

const useCarousalHook=(images)=>{
     const [index, setIndex] = useState(0);  
     const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        debugger
        setIndex(selectedIndex);
        if(e!=undefined)
        setDirection(e.direction);
    };

    return [index,direction,handleSelect]
}

export default useCarousalHook