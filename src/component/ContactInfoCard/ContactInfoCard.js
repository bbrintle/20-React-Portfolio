import React from 'react'
import "./ContactInfoCard.css"

function ContactInfoCard() {
    return (
        <div className>
            <div className='infocard'>
                <div className='aboutMeTitle'>Contact Info</div>
                <div className="contactCol">
                    <div className='resume'>
                        Resume
                    </div>
                    <div className='github'>
                        GitHub
                    </div>
                    <div className='linkedIn'>
                        LinkedIn
                    </div>
                    <div className='email'>
                        Email
                    </div>
                </div>   
            </div>
        </div>

    )
}

export default ContactInfoCard
