import { useState } from "react"
import { useAuth } from "../../context/auth-context.js";
import { useNavigate } from "react-router-dom";

export const LoginPage =()=>{
    const [username, setUsername] = useState('emilys');
    const [password, setPassword]= useState('emilyspass');
    const [error, setError]= useState('');
    const [isSubmiting, setIsSubmiting] = useState(false);

    const {login} = useAuth();
    const navigate = useNavigate();

    const submitLogin = async(e:React.SubmitEvent)=>{
        e.preventDefault();
        setError('');
        setIsSubmiting(true);

        try {
            await login({username, password});
            // navigate('/auth',{replace:true});
        } catch (error:any) {
            setError(error.message || 'Login or password isnt correct');
        }
        finally{
            setIsSubmiting(false);
        }
    }

    return(
        <div>
            <form onSubmit={submitLogin}>
                <div className="flex flex-col">
                    <label htmlFor="username">Username: </label>
                    <input type="text" value={username} 
                    onChange={(e)=>setUsername(e.target.value)}
                    className="border-2 border-black"
                    required 
                    />
                </div>
                  <div className="flex flex-col">
                    <label htmlFor="username">Password: </label>
                    <input type="password" value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    className="border-2 border-black"
                    required 
                    />
                </div>
                <button disabled={isSubmiting} className={`${isSubmiting? 'bg-blue-200':'bg-blue-500' } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`} type="submit">{isSubmiting ? 'Please wait' :'Login'}</button>
            </form>
        </div>
    )
}