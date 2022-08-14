import { useCallback, useRef, useMemo, } from 'react';

export function useLongPress({
    onClick = () => { },
    onLongPress = () => { },
    ms = 300,
} = {}) {
    const timerRef = useRef(false);
    const eventRef = useRef({});

    const callback = useCallback(() => {
        onLongPress(eventRef.current);
        eventRef.current = {};
        timerRef.current = false;
    }, [onLongPress]);

    const start = useCallback(
        (ev) => {
            ev.persist();
            eventRef.current = ev;
            timerRef.current = setTimeout(callback, ms);
        },
        [callback, ms]
    );

    const stop = useCallback(
        (ev) => {
            ev.persist();
            eventRef.current = ev;
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                onClick(eventRef.current);
                timerRef.current = false;
                eventRef.current = {};
            }
        },
        [onClick]
    );

    return useMemo(
        () => ({
            onMouseDown: start,
            onMouseUp: stop,
            onMouseLeave: stop,
            onTouchStart: start,
            onTouchEnd: stop,
        }),
        [start, stop]
    );
}

{/*
import { useCallback, useRef, useState } from "react";

const useLongPress = (
    onLongPress,
    onClick,
    { shouldPreventDefault = true, delay = 300 } = {}
) => {
    const [longPressTriggered, setLongPressTriggered] = useState(false);
    const timeout = useRef();
    const target = useRef();

    const start = useCallback(
        event => {
            if (shouldPreventDefault && event.target) {
                event.target.addEventListener("touchend", preventDefault, {
                    passive: false
                });
                target.current = event.target;
            }
            timeout.current = setTimeout(() => {
                onLongPress(event);
                setLongPressTriggered(true);
            }, delay);
        },
        [onLongPress, delay, shouldPreventDefault]
    );

    const clear = useCallback(
        (event, shouldTriggerClick = true) => {
            timeout.current && clearTimeout(timeout.current);
            shouldTriggerClick && !longPressTriggered && onClick();
            setLongPressTriggered(false);
            if (shouldPreventDefault && target.current) {
                target.current.removeEventListener("touchend", preventDefault);
            }
        },
        [shouldPreventDefault, onClick, longPressTriggered]
    );

    return {
        onMouseDown: e => start(e),
        onTouchStart: e => start(e),
        onMouseUp: e => clear(e),
        onMouseLeave: e => clear(e, false),
        onTouchEnd: e => clear(e)
    };
};

const isTouchEvent = event => {
    return "touches" in event;
};

const preventDefault = event => {
    if (!isTouchEvent(event)) return;

    if (event.touches.length < 2 && event.preventDefault) {
        event.preventDefault();
    }
};

export default useLongPress;
*/}
