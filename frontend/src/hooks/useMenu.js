import { useState } from 'react';

export const useMenu = () => {
    const [isOpen, setIsOpen] = useState(null); // Null como estado inicial

    const toggleMenu = () => {
        if (isOpen === null) {
            setIsOpen(true); // Primera vez abre
        } else {
            setIsOpen(!isOpen); // Toggle normal
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const openMenu = () => {
        setIsOpen(true);
    };

    return { isOpen, toggleMenu, closeMenu, openMenu };
};