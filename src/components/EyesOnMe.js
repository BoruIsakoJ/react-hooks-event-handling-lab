// Code EyesOnMe Component Here
function EyesOnMe(){
    function handleFocus(){
        console.log("Good!")
    }
    function handleBlur(){
        console.log("Hey! Eyes on me!")
    }
    return(
        <>
            <button style={{marginTop:"20px"}} onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
        </>
    )
}

export default EyesOnMe