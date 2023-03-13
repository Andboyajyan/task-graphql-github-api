import moment from "moment";
import {useState, useMemo, Ref, RefAttributes} from "react";
import Pagination from "../pagination";
import ITable from "../../types/tableTyps";


const Table = ({data, handleUser}:ITable) =>{
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * 10;
        const lastPageIndex = firstPageIndex + 10;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    return(
        <div className="container" data-ng-app="myApp" data-ng-controller="myCtrl">
         <table>
                <tr>
                    <th>Name</th>
                    <th>Star</th>
                    <th>Link of Repo</th>
                    <th>Last Commit Date</th>
                </tr>
                {currentTableData?.map((item, index) => (<tr data-ng-repeat="customer in people | filter: table">
                    <td onClick={() => handleUser(item.node.nameWithOwner)} style={{cursor: 'pointer'}}
                        key={item.node.nameWithOwner + index}>{item.node.nameWithOwner}</td>
                    <td key={item.node.id + index}>{item.node?.stargazerCount}</td>
                    <td key={item.node.id + index + item.node.nameWithOwner}>{item.node?.url}</td>
                    <td key={item.node.nameWithOwner + item.node.nameWithOwner}>{item.node?.defaultBranchRef?.target?.history.nodes[0]?.committedDate ? moment(item.node.defaultBranchRef?.target?.history.nodes[0]?.committedDate).format("L-HH:SS") : "N/A"}</td>
                </tr>))}
            </table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data?.length}
                pageSize={10}
                onPageChange={(page:number) => setCurrentPage(page)}
            />
        </div>
    )
}

export default Table