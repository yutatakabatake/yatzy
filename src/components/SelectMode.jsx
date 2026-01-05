import { Link } from "react-router-dom"

function SelectMode() {
    return (
        <>
            <Link to={"/one"}>SOLO</Link>
            <Link to={"/two"}>VS</Link>
        </>
    )
}

export default SelectMode