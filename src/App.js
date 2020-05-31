import React  from 'react';
import ReactDOM from 'react-dom';

let value;
function useState(initialState) {
     if(typeof value === "undefined") value = initialState;
    function setState(nextValue) {
        value = nextValue;
        ReactDOM.render(<MyName />, document.getElementById("root"));
    }
    return [value, setState];
}

function MyName () {
    const [ name, setName ] = useState('');

    function handleChange (evt) {
        setName(evt.target.value);
    }
    
    return (
        <div>
            <h1>My name is: {name}</h1>
            <input type="text" value={name} onChange={handleChange} />
        </div>
    )
}

export default MyName