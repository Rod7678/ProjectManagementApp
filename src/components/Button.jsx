export default function Button ({ children , ...props}){
    return <button className="text-xs md:text-base text-stone-400 font-medium bg-stone-700 rounded-md px-4 py-2 hover:bg-stone-600" {...props}>
        {children}
    </button>
}