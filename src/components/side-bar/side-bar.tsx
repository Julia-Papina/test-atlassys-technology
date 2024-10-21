import "./side-bar.scss";
import { linksSideBarArray } from "../../utils/constants/linksSideBarArray";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <section className="side-bar">
      <div className="side-bar__container">
        {linksSideBarArray.map((item, i) => (
          <NavLink key={i} className="side-bar__item" to={item.path}>
            <img src={item.image} />
           {item.title}
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default SideBar;
