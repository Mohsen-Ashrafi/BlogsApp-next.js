// import { RefObject, useEffect, useRef } from "react";

// export default function useOutsideClick(
//     handler: () => void,
//     listenCapturing = true
// ): RefObject<HTMLDivElement> {
//     const ref = useRef<HTMLDivElement>(null)

//     useEffect(() => {
//         function handleClick(e: MouseEvent) {
//             if (ref.current && !ref.current.contains(e.target as Node)) {
//                 handler()
//             }
//         }

//         document.addEventListener("click", handleClick, listenCapturing)

//         return () =>
//             document.removeEventListener("click", handleClick, listenCapturing)
//     }, [handler, listenCapturing])

//     return ref
// }

"use client";

import { RefObject, useEffect, useRef } from "react";

export default function useOutsideClick(
    handler: () => void,
    listenCapturing = true
): RefObject<HTMLDivElement> {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof document === "undefined") return;

        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                handler();
            }
        }

        document.addEventListener("click", handleClick, listenCapturing);
        return () =>
            document.removeEventListener("click", handleClick, listenCapturing);
    }, [handler, listenCapturing]);

    return ref;
}
