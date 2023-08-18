import { Link } from "react-router-dom"
import FitLogo from '../Assets/FitLogo.png'
const Navbar =()=>{
    return( 
        <div className="p-6 flex justify-between">
            <div className="text-2xl text-black " >Fitness</div>
            <div className="text-l flex justify-between self-end">
                <div className="mx-5">
                <Link to="/">Home</Link></div>
                <div className="mx-5">
                <Link to='/exercise'>Exercise</Link></div>
            </div>
        </div>
    )
}
export default Navbar