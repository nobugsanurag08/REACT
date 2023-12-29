function Hello(){
    // let myName="Anurag Kumar";
    let fullName=()=>{
        return "Anurag Kumar Gautam";
    }
    return <h3>
        hello is here , my name is {fullName()}
    </h3>
}
export default Hello