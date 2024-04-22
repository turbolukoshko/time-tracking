import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import { FC } from "react";
import { RouteType } from "../../../constants/routes";

interface INavigation {
  route: RouteType;
}

export const Navigation: FC<INavigation> = ({ route }) => {
  return (
    <li
      key={route.name + route.path}
      className="user-profile__navigation-list-item"
    >
      <NavLink
        to={route.path}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        {route.name}
      </NavLink>
    </li>
  );
};
