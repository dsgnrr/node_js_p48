import { useEffect, useState } from "react";
import axios from "axios";
import type { AxiosResponse } from "axios";

interface UserData {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    username: string;
}

const UserPage = () => {
    const [user, setUser] = useState<UserData>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        setIsLoading(true);
        setError(undefined);
        const controller = new AbortController();
        // fetch
        const getUserData = async () => {
            const result = await fetch('https://dummyjson.com/users/1');
            if (result.ok) {
                const data = await result.json();
                setUser(data);
                setIsLoading(false);
                return;
            }
            setError(`${result.status} Error while get data`);
        }
        // axios
        const getUserDataAxios = async ()=>{
            try {
                const response = await axios.get('https://dummyjson.com/users/1',
                    {
                        signal: controller.signal
                    }
                )
                setUser(response.data)
            } catch (error) {
                if(!axios.isCancel(error)){
                    setError(`Error while get data: ${error}`);
                }
            }finally{
                setIsLoading(false);
            }
        }
        getUserDataAxios();
        // getUserData();
        return()=>{
            controller.abort();
        }
    }, [])
    /**додайте форму для завантаження користувача
     * https://dummyjson.com/users/add'
     * Як має виглядати форма:
     * firstName: 'Muhammad',
    lastName: 'Ovi',
    age: 250, +ви можете додавати свої поля
    у якості результату на сторінці вивести об'єкт який приходить у респонс
     */
    return (
        <div>
            {isLoading &&
                <div>
                    <h1>Data loading</h1>
                    {error && <p className="text-red-900">{error}</p>}
                </div>}

            {user &&
                <div>
                    <h1 className="font-bold text-2xl">Id: {user.id}</h1>
                    <h1 className="font-bold text-2xl">First name: {user.firstName}</h1>
                    <h1 className="font-bold text-2xl">Last name: {user.lastName}</h1>
                    <h1 className="font-bold text-2xl">Age: {user.age}</h1>
                    <h1 className="font-bold text-2xl">Username: {user.username}</h1>
                </div>}
        </div>
    )
}

export default UserPage;