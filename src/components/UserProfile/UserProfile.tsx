import { FC } from "react";

import avatar from "../../assets/images/image-jeremy.png";
import "./UserProfile.scss";
import { Navigation } from "../Navigation/Navigation";
import { routes } from "../../../constants/routes";

export const UserProfile: FC = (): JSX.Element => {
  return (
    <section className="user-profile">
      <div className="user-profile__info">
        <div className="user-profile__avatar-container">
          <img
            src={avatar}
            alt="User avatar"
            className="user-profile__avatar"
          />
        </div>
        <div className="user-profile_inner">
          <span className="user-profile__inner-report-label">Report for</span>
          <p className="user-profile__inner-username">Jeremy</p>
          <p className="user-profile__inner-surname">Robson</p>
        </div>
      </div>
      <div className="user-profile__navigation">
        <ul className="user-profile__navigation-list">
          {routes.map((route) => (
            <Navigation route={route} key={route.name} />
          ))}
        </ul>
      </div>
    </section>
  );
};
