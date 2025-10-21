import RightCardContant from "./RightCardContant";


function RightCard(props) {
 

    return (
      <>
      <div className="h-full shrink-0 overflow-hidden relative w-60 bg-red-300 rounded-4xl">
        <img className="h-full w-full object-cover " src={props.img}></img>
          <RightCardContant id={props.id} tag={props.tag}/>
      </div>
  
      </>
    )
  }
  
  export default RightCard;