import React from 'react'
import "./Footer.css"

function Footer() {
    return (
    <div class="container-fluid fixed-bottom bg-dark">
        <div>
            <div class="col-sm-12 text-center center-block">
                <a href="https://github.com/bbrintle"><i className="fab fa-github-square fa-2x social"></i></a>
                <a href="https://www.linkedin.com/in/blake-brintle-3b421427/"><i className="fab fa-linkedin fa-2x social"></i></a>
                <a href="mailto:blakebrintle@gmail.com"><i className="fa fa-envelope-square fa-2x social"></i></a>
            </div>
        </div>
    </div>
    )
}

export default Footer
