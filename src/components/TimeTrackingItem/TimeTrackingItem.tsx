import { FC } from "react";
import { detectRange } from "../../../utils/detectRange";
import { generatePattern } from "../../../utils/generatePattern";
import { Pattern } from "../shared/Pattern/Pattern";
import { MeatballMenu } from "../shared/SVG/MeatballMenu/MeatballMenu";
import { renderTimeUnit } from "../../../utils/renderTimeUnit";
import { Activity, RouteType } from "../TImeTracking/TimeTracking";

type TimeTrackingItemProps = {
  activity: Activity;
  routeType: RouteType;
};

export const TimeTrackingItem: FC<TimeTrackingItemProps> = ({
  activity,
  routeType,
}) => {
  return (
    <li
      className={`time-tracking__list-item ${generatePattern(activity.title)}`}
      key={activity.title}
    >
      <Pattern title={activity.title} />
      <div className="time-tracking__list-item-inner">
        <div className="time-tracking__list-item-inner-title-container">
          <div className="time-tracking__list-item-inner-header">
            <p className="time-tracking__list-item-inner-header-title">
              {activity.title}
            </p>
            <div>
              <MeatballMenu />
            </div>
          </div>
          <div className="time-tracking__list-item-inner-body">
            <p className="time-tracking__list-item-inner-current-activity">
              {activity.timeframes[routeType].current}{" "}
              {renderTimeUnit(activity.timeframes[routeType].current)}
            </p>
            <p className="time-tracking__list-item-inner-prev-activity">
              {detectRange(routeType)} -{" "}
              {activity.timeframes[routeType].previous}{" "}
              {renderTimeUnit(activity.timeframes[routeType].previous)}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
