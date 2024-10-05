function Dynamic() {

    let myName = "Suraj";
    let fullName = () =>{
        return 'Suraj Pandey';
    }
    return (
        <h1>Hello {fullName()}</h1>
    );
}

export default Dynamic; 