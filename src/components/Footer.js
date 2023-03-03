import githubLogo from '../Images/githubLogo.png'
import twitterLogo from '../Images/twitterLogo.png'
import facebookLogo from '../Images/facebookLogo.png'
import '../CSS/Footer.css'

export default function Footer(){
    return(
        <div className="footer">
            <a href='https://github.com/Bansari88' target="_blank"><img src={githubLogo} className='footer--firstImg'></img></a>
            <a href='https://twitter.com/bpatel0721' target="_blank"><img src={twitterLogo} className='footer--secondImg'></img></a>
            <a href='https://www.facebook.com' target="_blank"><img src={facebookLogo} className='footer--thirdImg'></img></a>
        </div>
    )
}
