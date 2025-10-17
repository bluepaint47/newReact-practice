import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';




function App() {

  const jobOpenings = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZEZ6fa7bPwCI4HE5583rhd3qiFNmf6kiPg&s",
      companyName: "Google",
      jobTitle: "Frontend Developer",
      location: "Mountain View, CA",
      salaryRange: "$110,000 - $140,000",
      employmentType: "Full-time"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTWlnJCnn2ljYqv2t4XY9bM5U4pnohvXZRw&s",
      companyName: "Microsoft",
      jobTitle: "Software Engineer",
      location: "Redmond, WA",
      salaryRange: "$100,000 - $135,000",
      employmentType: "Full-time"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7xbUVkLMh7-sCFxaXARD8-i9J68CjcPQnw&s",
      companyName: "Amazon",
      jobTitle: "Backend Developer",
      location: "Seattle, WA",
      salaryRange: "$120,000 - $150,000",
      employmentType: "Full-time"
    },
    {
      brandLogo:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLfm0ooWZDodEBD2zlKPK3xt37ot4lUZHIBw&s",
      companyName: "Meta",
      jobTitle: "UI/UX Designer",
      location: "Menlo Park, CA",
      salaryRange: "$95,000 - $130,000",
      employmentType: "Full-time"
    },
    {
      brandLogo: "https://yt3.googleusercontent.com/s5hlNKKDDQWjFGzYNnh8UeOW2j2w6id-cZGx7GdAA3d5Fu7zEi7ZMXEyslysuQUKigXNxtAB=s900-c-k-c0x00ffffff-no-rj",
      companyName: "Apple",
      jobTitle: "iOS Developer",
      location: "Cupertino, CA",
      salaryRange: "$120,000 - $160,000",
      employmentType: "Full-time"
    },
    {
      brandLogo: "https://yt3.googleusercontent.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s900-c-k-c0x00ffffff-no-rj",
      companyName: "Netflix",
      jobTitle: "Data Engineer",
      location: "Los Gatos, CA",
      salaryRange: "$130,000 - $170,000",
      employmentType: "Full-time"
    },
    {
      brandLogo: "https://yt3.googleusercontent.com/dhVlUr4qzdw97K77mitoVSZk8u3KLl4hWCeiAVNuoqG1W7WmcN86GSIl96Ge1PeauemTwCl5TA=s900-c-k-c0x00ffffff-no-rj",
      companyName: "IBM",
      jobTitle: "Cloud Architect",
      location: "New York, NY",
      salaryRange: "$125,000 - $155,000",
      employmentType: "Full-time"
    }]





  return (
   <>
   <div className="parent"> 
   {jobOpenings.map(function(elem,index){
    return <div key={index}>
      <Card company={elem.companyName} post={elem.jobTitle} salary={elem.salaryRange} brand={elem.brandLogo} location={elem.location} />
      </div>

   })
   }
    </div>

   
   

  
   </>
  );
}

export default App;
