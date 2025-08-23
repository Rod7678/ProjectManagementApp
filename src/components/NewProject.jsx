import Input from "./Input.jsx";
import { useRef } from "react";

export default function NewProject({onAddedProject}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        onAddedProject({
            title: {enteredTitle},
          description: {enteredDescription},
          dueDate: {enteredDueDate},
        })
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950 ">
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
    )
}