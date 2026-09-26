import { useParams, useSearchParams } from "react-router-dom";

type UserParams = {
    id: string;
}

const ProfilePage = ()=>{
    const {id} = useParams<UserParams>();

    const [searchParams, setSearchParams] = useSearchParams();

    if(searchParams.size !==0){
        let listItems: string[]=[];
        searchParams.forEach((v,k)=>{
            listItems.push(`<li> ${k}->${v}</li>`);
        })

        return <ul>
            {listItems}
        </ul>
    }

    if(id){
        return <h1>Profile#-{id}</h1>
    }

    return(
        <h1>ProfilePage</h1>
    )
}
export default ProfilePage;