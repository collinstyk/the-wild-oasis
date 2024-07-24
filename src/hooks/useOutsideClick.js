import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, {
        capture: listenCapturing,
        // once: true,
      });

      return () =>
        document.removeEventListener("click", handleClick, {
          capture: listenCapturing,
          // once: true,
        });
    },
    [handler, listenCapturing]
  );

  return { ref };
}
