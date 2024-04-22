import { FC, useEffect, useState } from "react";
import { fetchData } from "../../../utils/fetchData";
import { useLocation } from "react-router-dom";
import "./TimeTracking.scss";
import { UserProfile } from "../UserProfile/UserProfile";
import { Loader } from "../shared/SVG/Loader/Loader";
import TimeTrackingList from "../TimeTrackingList/TimeTrackingList";

export interface Timeframe {
  daily: {
    current: number;
    previous: number;
  };
  weekly: {
    current: number;
    previous: number;
  };
  monthly: {
    current: number;
    previous: number;
  };
}

export interface Activity {
  title: string;
  timeframes: Timeframe;
}

export type RouteType = "daily" | "weekly" | "monthly";

export const TimeTracking: FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();
  const key = location.pathname.slice(1) as RouteType;

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data: Activity[] = await fetchData<Activity[]>();
        setActivities(data);
        setError(null);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again.");
      }
    };

    getData();
  }, []);

  if (loading) return <Loader />;

  if (error) return <h1>Error</h1>;

  return (
    <div className="container">
      <div className="wrapper">
        <UserProfile />
        <div className="time-tracking">
          <TimeTrackingList activities={activities} routeType={key} />
        </div>
      </div>
    </div>
  );
};
