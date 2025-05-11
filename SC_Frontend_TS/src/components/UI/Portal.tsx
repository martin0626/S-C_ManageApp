import { createPortal } from 'react-dom';
import { ReactNode } from 'react';


type portalPropsT = {
    children: ReactNode
}


const Portal = ({ children }: portalPropsT) => {
    const portalRoot = document.getElementById('portal-root');

    if (!portalRoot) return null; // Safety check

    return createPortal(children, portalRoot);
};

export default Portal;