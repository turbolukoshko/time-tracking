import { FC } from "react";
import { Activity, RouteType } from "../TImeTracking/TimeTracking";
import { TimeTrackingItem } from "../TimeTrackingItem/TimeTrackingItem";

type TimeTrackingListProps = {
  activities: Activity[];
  routeType: RouteType;
};

const TimeTrackingList: FC<TimeTrackingListProps> = ({
  activities,
  routeType,
}) => {
  return (
    <ul className="time-tracking__list">
      {activities.map((activity) => (
        <TimeTrackingItem
          activity={activity}
          routeType={routeType}
          key={activity.title}
        />
      ))}
    </ul>
  );
};

export default TimeTrackingList;
