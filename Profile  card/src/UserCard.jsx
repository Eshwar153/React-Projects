const userData=[
    {
     name:"James",
     city:"New York",
     description:"Front-end Developer",
     skills:["UI/UX","Front-end Development","HTML","CSS","Javascript","React","Node"],
     online:false,
   profile:"images/2.jpg",
    },
    {
     name:"Robert",
     city:"California",
     description:"Full Stack Web Developer",
     skills:["Vlogging","Web Development","HTML","CSS","Javascript","React","Angular"],
     online:false,
   profile:"images/2.jpg",
    },
    {
     name:"Nancy",
     city:"San fransisco",
     description:"Senior software developer",
     skills:["C","C++","Java programming","Python","C# .Net","MySQL","MongoDB"],
     online:true,
   profile:"images/2.jpg",
    }
]


function User(props){
    return <div className="card-container">
        <span className={props.online?"pro online":"pro offline"}>
            {props.online?"ONLINE":"OFFLINE"}
        </span>
        <img className="img"  src={props.profile}  alt="user"></img>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
         <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
         </div>
         <div className="skills">
            <h6>Skills</h6>
            <ul>
               {props.skills.map((skill,index)=>(
           <li key={index}>{skill}</li>
               ))}
            </ul>
         </div>
    </div>
}

export const UserCard = () => {
  return (
      <>
      {
        userData.map((user,index)=>(
          <User key={index} 
          name={user.name} 
          city={user.city}
          description={user.description}
          online={user.online}
          profile={user.profile}
          skills={user.skills}
          />

        ))
      }
      </>
  )
}

//  export const UserCard = () => {
//   return (
//        <User name="Thayumanavan" city="Newyork" description="Front-end Developer" skills={["UI/UX","Front End development",
//         "HTML","CSS","Javascript","React","Node"]} online={false} profile="images/1.jpg"/>
//   )
// }