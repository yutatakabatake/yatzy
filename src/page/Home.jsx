import { Link } from "react-router-dom"
import "./Home.css"

function SelectMode() {
    return (
        <div className="select-mode">
            <h1 className="title">YATZY</h1>

            <div className="mode-buttons">
                <Link to="/one" className="mode-button">
                    SOLO
                </Link>

                <Link to="/two" className="mode-button">
                    VS
                </Link>
            </div>
        </div>
    )
}

export default SelectMode