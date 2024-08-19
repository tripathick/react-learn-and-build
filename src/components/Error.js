import { useRouteError } from "react-router-dom"
const Error = () => {

    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h1>Opps This is !!!!! </h1>
            <h2> Error Page 😒</h2>
            <h4>{err.status} : {err.statusText}</h4>
            <h5>{err.data}</h5>
        </div>
    )
}
export default Error