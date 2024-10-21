import { NavLink } from "react-router-dom";
import avatar from "../../assets/images/Group206.png";
import "./form-person.scss";

const FormProfile = () => {
  return (
    <section className="profile">
      <div className="profile__container">
        <div className="navigation">
          <NavLink to={"#"} className="navigation__link">
            Edit Profile
          </NavLink>
          <NavLink to={"#"} className="navigation__link">
            Preferences
          </NavLink>
          <NavLink to={"#"} className="navigation__link">
            Security
          </NavLink>
        </div>
        <form className="profile__form">
          <div>
            <img src={avatar} className="avatar" />
          </div>
          <div className="profile__fieldset">
            <fieldset className="profile__fieldsetItem">
              <label className="profile__label">Your Name</label>
              <input
                type="text"
                placeholder="Charlene Reed"
                className="profile__input"
              />
              <label className="profile__label">Email</label>
              <input
                type="e-mail"
                placeholder="charlenereed@gmail.com "
                className="profile__input"
              />
              <label className="profile__label">Date of Birth</label>
              <select className="profile__input">
                <option>25 January 1990</option>
              </select>
              <label className="profile__label">Permanent Address</label>
              <input
                type="text"
                placeholder="San Jose, California, USA"
                className="profile__input"
              />
              <label className="profile__label">Postal Code</label>
              <input
                type="text"
                placeholder="45962"
                className="profile__input"
              />
            </fieldset>
            <fieldset className="profile__fieldsetItem">
              <label className="profile__label">Your Name</label>
              <input
                type="text"
                placeholder="Charlene Reed"
                className="profile__input"
              />
              <label className="profile__label">Password</label>
              <input
                type="password"
                placeholder="**********"
                className="profile__input"
              />
              <label className="profile__label">Present Address</label>
              <input
                type="text"
                placeholder="San Jose, California, USA"
                className="profile__input"
              />
              <label className="profile__label">City</label>
              <input
                type="text"
                placeholder="San JoseA"
                className="profile__input"
              />
              <label className="profile__label">Country</label>
              <input type="text" placeholder="USA" className="profile__input" />
            </fieldset>
          </div>
        </form>
        <div className="profile__buttonContainer">
          <button
            className="profile__button"
            type="submit"
            onClick={(evt) => evt.preventDefault()}
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};
export default FormProfile;
