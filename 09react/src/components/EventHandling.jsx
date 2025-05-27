export const EventHandling = () => {
    function handleButtonClick(user) {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.type)
        alert(`Hey, ${user} I am onClick Event`)
    }; 
    function handleButtonClickk (user){
        alert(`hello ${user}`);
    }
    return(
        <>
        <button onClick={handleButtonClick}>Click Me</button>
        <br />  <br />
        <button onClick={(event)=> handleButtonClick(event)}>Click Me 2</button>
        <br />  <br />
        <button onClick={(event) => console.log(event)}>Inline Function</button>
        <br />  <br />
        <button onClick={()  => alert('hey Iam inline event function')}>Inline arr fun</button>
        <br />  <br />
        <button onClick={()=>handleButtonClickk("satya")}>Click Me</button>
        </>
    )
}