export const EventProps = () => {
    const HandelWlecom = (user) =>{
        alert(`Hi, ${user}`)
    }

    const handleHover = () => {
        alert(`hi thank you for havering me`)
    }
    return(
        <>
        <WlecomeUser 
        onButtonClick = {() => HandelWlecom("satya")}
        onMouseEnter = {handleHover}/>
        </>
    )
};

const WlecomeUser = (props) => {
    const { onButtonClick, onMouseEnter } = props;
    const handelGreeting = () => {
        console.log(`Hey user welcome`);
        onButtonClick();
    }

    return(
        <>
        <button onClick={onButtonClick}>Click</button>
        <button onMouseEnter={onMouseEnter}>Hover</button>
        <button onClick={handelGreeting}>Greeting</button>
        </>
    )
}