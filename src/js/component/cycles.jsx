import React, { useEffect, useRef } from "react";

export const Cycles = ({ setSelectColor, colors }) => {
    const colorIndex = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectColor(colors[colorIndex.current]);
            colorIndex.current = (colorIndex.current + 1) % colors.length;
        }, 1000);
        return () => clearInterval(interval);
    }, [setSelectColor, colors]);
    return null;
} 
