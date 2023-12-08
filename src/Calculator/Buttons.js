
export default function Buttons(props){
    const buttons_list = ["C", "<", "(", ")", "7", "8", "9",
    "/", "4", "5", "6", "*", "1", "2", "3", "-", "=", "0", ".", "+"]

    const buttons = buttons_list.map(button => (
        <button className="calculator-button" onClick={()=>props.handleClick(button)}>{button}</button>))

    return(
        <>
        {buttons}
        </>
        
    )
}