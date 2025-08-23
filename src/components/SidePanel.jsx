import Button from "./Button.jsx";

export default function SidePanel({onStartAddProject, projectList}){
    return (
        <aside className="bg-stone-900 text-stone-50 flex flex-col px-8 py-16 w-1/3 text-start rounded-tr-2xl md:w-72">
            <h2 className="md:text-xl font-bold text-stone-200 uppercase mb-8">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>
                    + Add Project
                </Button>
            </div>
            <ul>
                <li></li>
            </ul>

        </aside>
    )
}