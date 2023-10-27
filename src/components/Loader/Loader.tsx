import './Loader.css'
import {Spinner} from "react-bootstrap";

const Loader = () =>{
    return(
        <div className='loader'>
                  <Spinner animation="grow" variant="success" />
        </div>
    )
}

export default Loader;