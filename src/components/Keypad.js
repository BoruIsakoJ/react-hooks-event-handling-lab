// Code Keypad Component Here

function Keypad (){
    function handleChange(){
        console.log("Entering password...")
    }

    return (
        <div>
            <label htmlFor="password">Password: </label>
            <input id="password" onChange={handleChange} type="password"/>
        </div>
    )
}

export default Keypad;