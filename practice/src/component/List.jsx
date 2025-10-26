const arr = [2,3,4,5,6,7]


function List(){
    return(
        <>
        {
            arr.map((arr,index)=><p key={index} >{arr*2}</p>)
        }
        </>
    )
}
export default List;