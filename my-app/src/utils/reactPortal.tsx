import { createPortal } from 'react-dom';
import { useState, useLayoutEffect } from 'react';

interface ReactPortalProps {
    children: React.ReactNode;
    wrapperId?: string;
}


const createWrapperAndAppendToBody = (wrapperIde: string) => {
    const wrapperElement = document.createElement('div');

    wrapperElement.setAttribute('id', wrapperIde);
    document.body.appendChild(wrapperElement);
    return wrapperElement;

}

export const ReactPortal = ({ children, wrapperId = 'root-modal' }: ReactPortalProps) => {
    const [wrapperElement, setWrapperElement] = useState(null);

    useLayoutEffect(() => {
        let portalCreated = false;
        let element = document.getElementById(wrapperId);

        if (!element) {
            portalCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);

        return () => {
            // delete the programatically created element
            if (portalCreated && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }

    }, [wrapperElement])

    if (wrapperElement === null) return null;

    return createPortal(children, wrapperElement);
}