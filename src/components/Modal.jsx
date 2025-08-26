import {useRef, forwardRef, useImperativeHandle} from 'react';
import { createPortal } from "react-dom"
import Button from './Button.jsx';

const Modal =  forwardRef(function Modal({children, buttonCaption}, ref) {
    const dialogBox =  useRef();

    useImperativeHandle(ref, ()=>{
        return {
            open() {
                dialogBox.current.showModal()
            }
        };
    });


    return createPortal(<dialog ref={dialogBox} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
    <form method="dialog" className="mt-4 text-right">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">{buttonCaption}</button>
    </form> 
    </dialog>,
    document.getElementById('modal-root')
);
});

export default Modal;