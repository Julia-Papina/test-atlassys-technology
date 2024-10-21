import { NavLink } from "react-router-dom";
import './form-person.scss';

const FormProfile = () => {
    return (
        <section className='profile'>
            <div className='profile__container'>
            <div className="navigation">
                <NavLink to={'#'} className='navigation__link'>Edit Profile</NavLink>
                <NavLink to={'#'} className='navigation__link'>Preferences</NavLink>
                <NavLink to={'#'} className='navigation__link'>Security</NavLink>


            </div>
            <form  className='profile__form'>
                

            </form>
            </div>
           

        </section>

    )
}
export default FormProfile;