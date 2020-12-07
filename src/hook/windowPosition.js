import { useLayoutEffect, useState } from 'react';

const useWindowPosition = (id) =>{
    const [animation, setAnimation] =useState(false);


    useLayoutEffect(()=>{
        const updatePosition = () =>{
            const offetSetHeight = window.document.getElementById(id).offsetHeight;
            if(window.pageYOffset > offetSetHeight * 0.3) {
                setAnimation(true);
            }
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, [id]);
    return animation;
}


export default useWindowPosition;