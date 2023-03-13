import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_CURRENT_REPO} from "../apis/getCurrentRepo";
import moment from "moment/moment";
import './detailsPage.scss'
import Loading from "../component/loading";
import arrowBack from '../assets/back-arrow-svgrepo-com.svg'


const CardRepo = () => {
    const {user, name} = useParams();
    const navigate = useNavigate()
    const { data, loading } = useQuery(GET_CURRENT_REPO,{
        variables:{
            owner: user,
            name
        }
    });

    if(loading){
        return <Loading/>
    }
    return (
        <div className={"details-wrapper"}>
            <div className={"info"}>
                    <div className={"info-header"}>
                        <img width={100} height={100} style={{borderRadius:"50px"}} src={data?.repository?.owner.avatarUrl} srcSet={data?.repository?.owner.avatarUrl} alt="img"/>
                        <p >
                            <p className={'repo-name'}>Name of repo </p>
                            <span>{data?.repository?.nameWithOwner}</span>
                        </p>
                    </div>
                <div>
                    <p>Star <span>{data?.repository?.stargazerCount}</span></p>
                    <p>link-<a href={data?.repository?.url} target={"_blank"}>{data?.repository?.url}</a></p>
                </div>
                <p>description </p>
                <span>{data?.repository?.description ? data?.repository?.description : "N/A"}</span>


                   <p>Last commit date- <span>{data?.repository?.defaultBranchRef?.target?.history.nodes[0]?.committedDate ? moment(data?.repository?.defaultBranchRef?.target?.history.nodes[0]?.committedDate).format("L-HH:SS") : 'N/A'}</span></p>
                <div className="info-footer">
                    <button className={"button-back"} onClick={()=>navigate("/")}><img width={20} height={20} src={arrowBack} alt="arrow"/></button>
                    <ul>
                        <p>languages</p>
                        {data?.repository?.languages.edges.length ? data?.repository?.languages.edges?.map((item)=>{
                       return(
                           <li style={{color:`${item?.node?.color}`}}>{item.node.name}</li>
                       )
                        }) : <p>N/A</p>}</ul>
               </div>

            </div>
        </div>
    )

}

export default CardRepo