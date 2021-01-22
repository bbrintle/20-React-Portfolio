import React from 'react'
import "./MiniProjectCard.css"
import miniPro1 from "./3-Code.png"
import miniPro2 from "./4-Code.png"
import miniPro3 from "./5-Code.png"
import miniPro4 from "./6-Code.png"
import miniPro5 from "./Google Book Search.png"
import miniPro6 from "./Workout.png"
import miniPro7 from "./Note.png"
import miniPro8 from "./Buget.png"

function MiniProjectCard() {
    return (
        <div className='miniprojectcard'>
        <div className='miniTitle'>Mini-Projects</div>
            
            <div className="row">
                <div className="column">
                    <div>
                        <a href="https://bbrintle.github.io/3-Password-Generator/"><img src={miniPro1} alt='' id="resize"/></a>
                    </div>
                    <div className="spacer">
                        <a href="https://github.com/bbrintle/3-Password-Generator" className="spacer">Password Generator GitHub Repository</a>
                    </div>
                </div>
                
                <div className="column">
                    <div>
                        <a href="https://bbrintle.github.io/4-Code-Quiz/"><img src={miniPro2} alt='' id="resize"/></a>
                    </div>
                    <div className="spacer">
                        <a href="https://github.com/bbrintle/4-Code-Quiz" className="spacer">Star Wars Quiz GitHub Repository</a>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="column">
                    <div>
                        <a href="https://bbrintle.github.io/5-Day-Planner/"><img src={miniPro3} alt='' id="resize"/></a>
                    </div>
                    <div className="spacer">
                        <a href="https://github.com/bbrintle/5-Day-Planner" className="spacer">Day Planner GitHub Repository</a>
                    </div>
                </div>

                <div className="column">
                    <div>
                        <a href="https://bbrintle.github.io/6-Weather-Dashboard/"><img src={miniPro4} alt='' id="resize"/></a>
                    </div>
                    <div className="spacer">
                        <a href="https://github.com/bbrintle/6-Weather-Dashboard">Weather Dashboard GitHub Repository</a>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="column">
                    <div>
                        <a href="https://blake-google-book-search.herokuapp.com/"><img src={miniPro5} alt='' id="resize"/></a>
                    </div>
                    <div className="spacer">
                        <a href="https://github.com/bbrintle/21-Google-Books-Search" className="spacer">Google Book Search GitHub Repository</a>
                    </div>
                </div>

                <div className="column">
                    <div>
                        <a href="https://cryptic-wave-71844.herokuapp.com/"><img src={miniPro6} alt='' id="resize"/></a>
                    </div>
                    <div className="spacer">
                        <a href="https://github.com/bbrintle/17-Workout-Tracker">Workout Tracker GitHub Repository</a>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="column">
                    <div>
                        <a href="https://tranquil-brook-30785.herokuapp.com/"><img src={miniPro7} alt='' id="resize"/></a>
                    </div>
                    <div className="spacer">
                        <a href="https://github.com/bbrintle/11-Note-Taker" className="spacer">Note Taker GitHub Repository</a>
                    </div>
                </div>

                <div className="column">
                    <div>
                        <a href="https://floating-fjord-65617.herokuapp.com/"><img src={miniPro8} alt='' id="resize"/></a>
                    </div>
                    <div className="spacer">
                        <a href="https://github.com/bbrintle/18-Budget-Tracker">Budget Tracker GitHub Repository</a>
                    </div>
                </div>
            </div>

            {/* <div>
                <a href=""><img src={miniPro2} alt=''/></a>
            </div>
            <div className="spacer">
                <a href="" className="spacer">GitHub Repository</a>
            </div> */}

        </div>   
    )
}

export default MiniProjectCard
