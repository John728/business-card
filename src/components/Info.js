import photo from '../Photo.jpeg';
import emailIcon from '../mail.png';
import '../style.css';

export default function Info() {
    return (
        <>

            <img src={photo} alt="" className='photo'></img>

            <h2 className="name">
                John Henderson
            </h2>

            <p className="roll">
                Electrical Eng and Comp Sci 
            </p>

            <p className="sub-roll">
                Something
            </p>

            <div className='button-container'>
                <a class="email-button" href="mailto:john.henderson728@gmail.com">
                    <img src={emailIcon} alt='email-icon' className='email-image-button'></img>
                    <p class='email-tag'>
                        Email
                    </p>
                </a>
            </div>
        </>
    );
}