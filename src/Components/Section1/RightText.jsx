import RightCard from "./RightCard";


function RightText(props) {
 

    return (
      <>
        <div className="h-full  flex flex-nowrap overflow-x-auto gap-10 p-4 w-2/3 ">
   {props.users.map(function(elem,idx){
    return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>

   })}
  
  </div>
  
      </>
    )
  }
  
  export default RightText;