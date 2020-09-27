import React, { useState, useEffect, useRef } from 'react';
const debounce = (a, b, c) => {
    var d, e;
    return function () {
        function h() {
            d = null;
            c || (e = a.apply(f, g));
        }
        var f = this, g = arguments;
        return (clearTimeout(d), d = setTimeout(h, b), c && !d && (e = a.apply(f, g)), e)
    }
}

const removeHTMLTags = str => str.replace(/<[^>]*>?/gm, '');



function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}


export {
    debounce,
    removeHTMLTags,
    useInterval
};