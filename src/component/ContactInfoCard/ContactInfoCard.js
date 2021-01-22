import React from 'react'
import "./ContactInfoCard.css"
import Resume from "./BlakeBrintleResume(Web).pdf"

function ContactInfoCard() {
    return (
        <div className>
            <div className='infocard'>
                <div className='aboutMeTitle'>Contact Info</div>
                <div className="contactCol">
                    <div className='resume'>
                        <p class="centered">My Resume: <span class="add-margin"><a href={Resume}> Click Here</a></span></p>
                    </div>
                    <div className='github'>
                        <p class="centered">GitHub Portfolio: <span><a href="https://github.com/bbrintle"><i class="fab fa-github-square fa-2x social add-margin"></i></a></span></p>
                    </div>
                    <div className='linkedIn'>
                        <p class="centered">LinkedIn Page: <span><a href="https://www.linkedin.com/in/blake-brintle-3b421427/"><i class="fab fa-linkedin fa-2x social add-margin"></i></a></span></p>
                    </div>
                    <div className='email'>
                        <p class="centered">Email Me: <span><a href="mailto:blakebrintle@gmail.com"><i class="fa fa-envelope-square fa-2x social add-margin"></i></a></span></p>
                    </div>
                </div>   
            </div>
        </div>

    )
}

export default ContactInfoCard
