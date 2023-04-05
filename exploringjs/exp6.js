function outside(){
    inside()
    function inside(){
        console.log("insode fuction")
    }
    console.log("outside of function")
}
outside()