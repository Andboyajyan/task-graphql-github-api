interface ICommitDate  {
    committedDate : string
}

interface INodes {
    nodes : ICommitDate[]
}

interface ITarget {
    history : INodes
}

interface IBranchRef{
    target: ITarget
}

interface INodeValues {
    id: string,
    nameWithOwner: string,
    description: string,
    stargazerCount: number,
    url: string,
    defaultBranchRef: IBranchRef
}
interface INode {
    node: INodeValues
}

export default interface ITable {
    data: INode[],
    handleUser:(ownerName:string)=>void
}