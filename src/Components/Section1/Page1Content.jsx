import LeftText from "./LeftText";
import RightText from "./RightText";



function Page1Content(props) {
 

    return (
      <>
       
       <div className=" py-10 flex gap-10 items-center  h-[90vh] px-18">
        <LeftText></LeftText>
        <RightText users={props.users}/>

       </div>
 
  
      </>
    )
  }
  
  export default Page1Content;