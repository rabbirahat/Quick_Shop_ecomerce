import { useState, useEffect } from "react";

// Hook
const useWindowSize = () => {
   
    const [windowSize, setWindowSize] = useState( undefined);

    useEffect(() => {
       
        if (typeof window !== "undefined") {
    
            function handleResize() {
                // Set window width/height to state
                setWindowSize(window.innerWidth);
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
};

export default useWindowSize;