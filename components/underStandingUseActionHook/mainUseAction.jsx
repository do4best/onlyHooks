import React, {useActionState, useRef} from 'react';

function MainUseAction(props) {
 const [data,action,isPending] = useActionState(saveUser,undefined)
    return (
        <>
            <form action={action} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">First Name</legend>
                <input  type="text" className="input" placeholder="My awesome page" id={"firstName"} name={"firstName"} />
                <button disabled={isPending } className="btn btn-primary">Submit</button>
                {data?.error && <span className={"text-red-600"}>{data?.error}</span>}
                {data?.message && <span className={"text-green-600"}>{data?.message}</span>}
            </form>
        </>
    );
}
async function saveUser(previouState,formData) {
    const firstName = formData.get("firstName");
    await wait(1000)
    if(firstName === ""){
        return {error:"Please enter your first name."};

    }
    return {message:"Save user with first name."};
}
function wait(duration){
    return new Promise(resolve => setTimeout(resolve, duration));
}
export default MainUseAction;