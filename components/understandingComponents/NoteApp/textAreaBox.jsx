import React from 'react';

function TextAreaBox(props) {
    return (
        <>
            <textarea className="textarea p-20 rounded-2xl resize-none shadow-info h-[200px] text-blue-600 bg-transparent box-border placeholder:text-gray-500 placeholder:opacity-25 hover:shadow-2xl transition-all duration-300 ease-in-out" placeholder="Empty Note"></textarea>
        </>
    );
}

export default TextAreaBox;