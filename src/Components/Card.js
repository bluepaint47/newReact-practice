import './Card.css';
import { Bookmark } from "lucide-react";

function Card(props) {

  









    return (
     <>
    
     <div className='card'>
            <div>
            <div className='Top'>
          <img src={props.brand} alt="hi"/>
                <button>save<Bookmark />  </button>
            </div>
            <div className='middle'>
                <h1>{props.company}</h1> <span>5 days ago</span>
                <h2>{props.post}</h2>
                <div className='tag'>
                    <h4>part Time</h4>
                    <h4>senoir level</h4>
                </div>
            </div>
            </div>
            <div className='botom'>
                <div>
                    <h3>{props.salary}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>

            </div>

        </div>
  
    
     </>
    );
  }
  
  export default Card;