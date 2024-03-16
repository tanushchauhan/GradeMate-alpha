export const metadata = {
  title: "Dashboard | GradeMate",
  description: "This is Dashboard for GradeMate",
  // other metadata
};

import dynamic from "next/dynamic";
// import Maincomponent from "./Maincomponent";
const NoSSR = dynamic(() => import("./Maincomponent"), { ssr: false });

function Dashboard() {
  return <NoSSR />;
}

export default Dashboard;
