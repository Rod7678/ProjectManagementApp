import NoProject from '../assets/no-projects.png';
import Button from './Button.jsx';

export default function NoProjectSelected({onStartAddProject}){
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={NoProject} className="w-16 h-16 object-contain mx-auto" alt="An empty task list" />
            <h2 className="text-2xl font-bold text-stone-600 capitalize pb-4">No project selected</h2>
            <p className="text-xl font-sans font-semibold text-stone-400 pb-4">Select a project or get started with a new one</p>
        <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
        </p>
        </div>
    )
} 