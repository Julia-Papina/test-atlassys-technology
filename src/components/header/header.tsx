import "./header.scss";
import creditCard from "../../assets/images/credit-card.png";
import settingsImg from "../../assets/images/settings-1.png";
import bellImg from "../../assets/images/settings-2.png";
import avatar from "../../assets/images/avatar.png";
import magnifyingImg from "../../assets/images/magnifying.png";

const Header = () => {
  return (
    <header className="header">
      <section className="header__container">
        <div className="header__logo">
          <img src={creditCard} className="header__logoImg" />
          <h1 className="header__logoTitle">BankDash.</h1>
          <h2 className="header__settingsTitle">Setting</h2>
        </div>

        <div className="header__settings">
          <div className="header__settingsList">
            <div className="header__inputSearch">
              <img src={magnifyingImg} />
              <input
                className="header__input"
                type="search"
                placeholder="Search for something"
              />
            </div>
            <div className="header__settingItem">
              <img src={settingsImg} />
            </div>
            <div className="header__settingItem">
              <img src={bellImg} />
            </div>
            <div>
              <img src={avatar} />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
