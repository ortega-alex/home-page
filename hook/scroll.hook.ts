import { useCallback, useEffect, useState } from "react";

export const usePositionScrollView = ({ id }: { id: string }) => {
    const [inView, setInView] = useState(false);

    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const element = document.querySelectorAll(id);  // Usamos id aquí

        if (element.length > 0) {  // Aseguramos que hay elementos
            element.forEach((el) => {
                const elementPosition = el.getBoundingClientRect().top;
                // Comprobamos si el elemento está en el viewport
                if (scrollPosition > elementPosition) {
                    setInView(true);
                } else {
                    setInView(false);
                }
            });
        }
    }, [id]); 

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Llamamos al handler para comprobar el estado inicial
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);  // Aseguramos que el hook se ejecute cada vez que el id cambie

    return { inView };
};