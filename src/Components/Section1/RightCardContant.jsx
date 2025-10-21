


function RightCardContant(props) {
 

    return (
      <>
       <div className="h-full  absolute top-0 left-0 w-full  p-6 flex flex-col justify-between">
            <h2 className="bg-white text-2xl font-semibold rounded-full h-13 w-13 flex justify-center items-center ">{props.id+1}</h2>
            <div>
             <p className="text-xl leading-normal text-white mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             <div className="flex justify-between">
                <button className="bg-blue-600 text-white rounded-full font-medium px-8 py-2 ">{props.tag}</button>
                <button className="bg-blue-600 text-white rounded-full font-medium px-3 py-2 "><i className="ri-arrow-right-line"></i></button>
             </div>
            </div>
          </div>
    
  
      </>
    )
  }
  
  export default RightCardContant;