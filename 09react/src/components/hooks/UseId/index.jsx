import { useId } from "react"

export const UseId = () => {

    const Id = useId();
    

    return (
        <form>
            <div>
                <label htmlFor= {Id + "usernameId"} > UserName </label>
                <input type="text" id= {Id + "usernameId"} name="name" />
            </div>
            <div>
                <label htmlFor = {Id + "emailId"} >Email</label>
                <input type="email" id =  {Id + "emailId"} name="email"/>
            </div>
            <button type="submit">submit</button>
        </form>
    )
}