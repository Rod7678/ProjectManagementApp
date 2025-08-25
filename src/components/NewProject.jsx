import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({onAddedProject, onCancelProject}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(
            enteredTitle.trim() === '' || 
            enteredDescription.trim() === '' || 
            enteredDueDate.trim() === '')
        {
            modal.current.open();
            return;
        }

        onAddedProject({
            title: {enteredTitle},
          description: {enteredDescription},
          dueDate: {enteredDueDate},
        })
    }

    return (
        <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Looks like you forgot to enter value in some fields.</p>
            <p className="text-stone-600 mb-4">plase make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950 "
                    onClick={onCancelProject}
                    >
                        Cancel
                    </button>
                </li>
                <li>
                    <button 
                    className="px-6 py-2 bg-stone-800 text-stone-50 rounded-md hover:bg-stone-950"
                    onClick={handleSave}>
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input ref={title} label="Title" />
                <Input ref={description} label="Description" textarea rows="6" />
                <Input ref={dueDate} label="Due Date" type="date"/>
            </div>
        </div>
        </>
    )
}