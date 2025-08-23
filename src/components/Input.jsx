import { forwardRef } from "react";

const Input =  forwardRef(function Input({label, textarea, ...props}, ref){
    const classes = " w-full bg-stone-200 border-b-2 border-stone-300 text-stone-600 rounded-sm p-2 focus:outline-none focus:border-stone-600"
    return (
    <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold text-stone-500 uppercase">{label}</label>
        {textarea ? <textarea className={classes} ref={ref} {...props} /> : <input ref={ref} className={classes}  {...props} />}
    </p>)
});

export default Input;