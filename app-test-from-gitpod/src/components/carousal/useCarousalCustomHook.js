import {useState,useEffect} from 'react'

const useCarousalHook=(images)=>{
    const [currentIndex,setCurrentIndex]=useState(0)    
    const timer=()=>setTimeout(()=>{
        if((images.length-1)==currentIndex)
        setCurrentIndex(0)
        else
        setCurrentIndex(currentIndex+1)
    },3000)
    useEffect(()=>{
        timer()
        return clearTimeout(timer)
    },[currentIndex])
    return [currentIndex,setCurrentIndex]
}

export default useCarousalHook