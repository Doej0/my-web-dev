import construction from '../assets/under-construction.jpg';
export default function Projects(){
    return(
        <>
        

        <article id='projects'>
        <div className='w3-row-padding w3-center'>
        <div className="w3-card-4 w3-panel w3-shadow w3-third">
        <header className="w3-container w3-blue-grey">
            <h3>Project I</h3>
        </header>
        <div className="w3-container">
        <img src={construction} alt='under construction' style={{width:'100%'}}/>
            <p>Github Here</p>
        </div>

        </div>
        <div className="w3-card w3-panel  w3-shadow w3-third ">
        <header className="w3-container w3-blue-grey">
            <h3>Project II</h3>
        </header>
        <div className="w3-container">
        <img src={construction} alt='under construction' style={{width:'100%'}}/>
            <p>Github Here</p>
        </div>

        </div>
        <div className="w3-card w3-panel w3-shadow w3-third ">
        <header className="w3-container w3-blue-grey">
            <h3>Project III</h3>
        </header>
        <div className="w3-container">
        <img src={construction} alt='under construction' style={{width:'100%'}}/>
            <p>Github Here</p>
        </div>

        </div>

        </div>
        </article>
        
        

        </>
      
    )
}