import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleButton = ()=>{
        // navigate('/profile');
        // navigate('/profile', {replace: true});
        navigate('/profile', {state:{fromLogin:true}});
    }
    return (
        <div>
            <h1>HomePage</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButton}>Next page</button>
        </div>

    )
}
export default HomePage;