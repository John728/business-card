import '../style.css';
import linkedinIcon from '../linkdin-icon.svg';
import githubIcon from '../github-icon.svg';

export default function Footer() {
    return (
        <div className='footer-container'>
            <a href='https://www.linkedin.com/in/john-henderson-821b9b1a3/' className='footer-icon'>
                <img src={linkedinIcon} alt=""></img>
            </a>

            <a href='https://github.com/John728' className='footer-icon'>
                <img src={githubIcon} alt=""></img>
            </a>

        </div>
    );
}