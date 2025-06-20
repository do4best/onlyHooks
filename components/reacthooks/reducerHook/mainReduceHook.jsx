import React, {useReducer} from 'react';

function MainReduceHook(props) {
    const [counter,setCounter] = React.useState(0);
    const [text, setText] = React.useState(false);
    const reducer=(state,action)=>{
        switch(action.type){
            case 'increment':
                return {count:state.count+1,showText:state.showText};
                case 'toggleShowText':
                    return {count:state.count,showText:!state.showText};
            default:
                return state;
        }
    }
    const [state,dispatch] = useReducer(reducer,{count:0,showText:true} )
    return (
        <>
       <h1>This is main  Reducer Hook</h1>
            <h2>{state.count}</h2>
            <button className="btn btn-primary" onClick={()=>{dispatch({type:"increment"})
                dispatch({type:"toggleShowText"})}}    >Click</button>
            {text&&<p>This is a text</p>}
        </>
    );
}

export default MainReduceHook;