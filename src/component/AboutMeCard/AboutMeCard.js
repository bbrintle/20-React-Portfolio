import React from 'react'
import './AboutMeCard.css'
import mypic from './BlakeSuit.png'

function AboutMeCard() {
    return (
        <div className>
            <div className='card'>
                <div className='aboutMeTitle'>About Me</div>

                <div className="firstRow">

                    <img src={mypic} alt='mypics' className="mypic"></img>

                    
                    <div className='firstParagraph'>
                        I am a Course Content Coordinator at Loma Linda Universitey School of Dentistry. I was born and raised here in Southern California.
                        Some of my favorite things are Technology, Movies, Video Games, Camping and Disneyland.
                    </div>

                </div>
                    

                <div className='secondParagraph'>
                    I have always wanted to make video games when I was younger and my dream job would have been to work as a developer for a popular gaming company.
                    Throughout my years of schooling, I have been introduced and have explored the amazing world of coding. It all started as a freshmen in high school when I took my first computer programming class.
                    Not knowing what the class was actually about, but knowing I loved computers, I signed up in a heart beat and quickly found out I would be coding in Visual Basic for the rest of the year.
                    I had never felt like I was a very creative individual when it came to art and making things from scratch, and coding made me realize I can create masterpieces without ever having to need an "artsy" side of myself.
                    It was from that moment on I knew I would be working with computer and developing for the rest of my entire life.
                </div>
            </div>
        </div>

    )
}

export default AboutMeCard
