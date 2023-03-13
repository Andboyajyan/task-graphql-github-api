import {useAppSelector} from "../../hooks/useAppSelector";
import Table from "../table/table";
import {useNavigate} from "react-router-dom";
import Loading from "../loading";


const RepoList = () => {
    const { repos, isLoading } = useAppSelector(state => state.reposSlice);
    const navigate = useNavigate()
    const handleUser = (ownerName:string) => {
        navigate(`/repos/${ownerName}`)
    }

    if (isLoading){
        return <Loading/>
    }
  return(
      <div>
          <Table data={repos} handleUser={handleUser}/>
      </div>
  )
}
export default RepoList