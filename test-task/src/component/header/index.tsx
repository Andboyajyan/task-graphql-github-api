import {useQuery} from "@apollo/client";
import {GET_REPOSITORIES} from "../../apis/getRepository";
import {useEffect, useState} from "react";
import {setRepositories, isLoading} from "../../store/slices/repos";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import './index.scss'


const Header = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const {repos} = useAppSelector(state => state.reposSlice)
    const dispatch = useAppDispatch()
    const { data, loading } = useQuery(GET_REPOSITORIES,{
        variables:{
            userQuery: searchValue
        }
    });
    useEffect(()=>{
        dispatch(isLoading(loading))
        if (!repos?.length){
            dispatch(setRepositories(data?.search?.edges))
        }
    },[searchValue, data?.search?.edges])


    return(
        <div className='header'>
            <div className="form__group field">
                <input  type="input" className="form__field" placeholder='Search Repos'  value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} required/>
                <label htmlFor="name" className="form__label">Search Repos</label>
            </div>
        </div>
    )

}

export default Header