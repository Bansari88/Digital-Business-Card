import emailLogo from '../Images/emailLogo.png'
import linkedInLogo from '../Images/linkedInLogo.png'
import profilePhoto from '../Images/profilePhoto.png'
import '../CSS/Info.css'

export default function Info(){
    return(
        <div className="info">
            <img src={profilePhoto}></img>
            <div className="info--details">
                <h3>Bansari Patel</h3>
                <h5>Java Developer</h5>
                <div>
                    <a href='mailto:hello@bansaripatel.com' target="_blank"><button className="info--buttons"><img src={emailLogo}></img></button></a>
                    <a href='https://www.linkedin.com/in/bansari-patel-78a445261/' target="_blank"><button className="info--buttons"><img src={linkedInLogo}></img></button></a>
                </div>
            </div>
        </div>
    )
}