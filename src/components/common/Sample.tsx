import { init } from "next/dist/compiled/webpack/webpack";
import { useState } from "react";


const contextForm = context()

@global childstate
function useForm(initialvalue) => {
    if (childstate) {
        return childstate;
    } else {
        childsate = initialvalue
    }
}

export const ChildSample = ({ isactive } : { isactive: boolean }) => {
    // const [state, setState] = useState(isactive);
    
    const state = isactive
    return (
        <div>
            {state}
        </div>
    )
}


export const ParentSample = () => {
    const [initalform, setinitialForm] = useState({})
    const [childActive, setChildActive] = useState(true);


    return (
        <contextForm.provider value={{ initalform, setinitialForm }}>

        </div>
        <div>
            <ChildSample isactive={childActive} />
        </div>
    );
}



