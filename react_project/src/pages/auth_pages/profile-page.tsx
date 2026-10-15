import { useAuth } from "../../context/auth-context.js";

const  AuthProfilePage = () =>{
    const {user, logout} = useAuth();
    return(
        <div>
            {user &&(
                <div>
                    <h1>Username: {user.username}</h1>
                    <h1>Name: {user.firstName} {user.lastName}</h1>
                    <h1>Email: {user.email}</h1>
                    <img src={user.image} alt={user.username} />
                </div>
            )}
            <button className={`bg-red-800 hover:bg-red-950 text-white font-bold py-2 px-4 rounded`} onClick={()=>logout()}>Logout</button>
        </div>
    )
}

/**
 * якщо користувач автентифікований, переходить на сторінку /login його перекидує на сторінку профіля
 * в хедері, якщо користувач автентифікований, виводити його username та кнопку для logout
 * 
 * Що відправити?
 * - Код який додали у LoginPage
 * - Скріншот хедеру
 */
export default AuthProfilePage;