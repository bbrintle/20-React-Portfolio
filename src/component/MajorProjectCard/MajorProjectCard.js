import React from 'react'
import "./MajorProjectCard.css"
import project1Pic from "./project.png"
import project2Pic from "./project2.png"
// import project3Pic from "./project3.png"

function MajorProjectCard() {
    return (

        <div className='majorprojectcard'>
            <div className='majorTitle'>Major Projects</div>
            <div className="projectCol">  

                {/* <div>
                    <a href="#"><img src={project3Pic} alt=''/></a>
                </div>
                <div className="spacer">
                    <a href="https://github.com/bbrintle/community-chat-app">Chitter Chatter GitHub Repository</a>
                </div> */}

                <div>
                    <a href="https://project-wildlife-observer.herokuapp.com/"><img src={project2Pic} alt=''/></a>
                </div>
                <div className="spacer">
                    <a href="https://github.com/CdmMandalorian/Project-02/tree/blake" className="spacer">Wildlife Observer GitHub Repository</a>
                </div>
      
                <div>
                    <a href="https://bbrintle.github.io/project1/"><img src={project1Pic} alt=''/></a>
                </div>
                <div className="spacer">
                    <a href="https://github.com/bbrintle/project1">Currency Exchange Calculator GitHub Repository</a>
                </div>
                
            </div>   
        </div>

    )
}

export default MajorProjectCard
