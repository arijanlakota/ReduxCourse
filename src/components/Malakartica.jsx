function Kartica({content,author,keyVal}){
    return(<div key={keyVal} className="quoteDiv">
       <p>{content}</p>
       <p>{author}</p>
    </div>)
}
export default Kartica