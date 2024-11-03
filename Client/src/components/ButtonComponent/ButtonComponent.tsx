import { useState } from "react";

function Counter() {
    const [value, setValue] = useState(1);

    return(
    <div>
        <button onClick={() => setValue((value) => value + 1)}>Value: {value}</button>
    </div>)
    
}

export default Counter