import React from "react";
import Card from "./Components/Card";
const App = () => {
  let data = [
    {
      plan: "FREE",
      price: 0,
      user: "Single User",
      isUser: true,
      storage: "5 GB",
      isStorage: true,
      publicProjects: "Unlimited Public Projects",
      isPublicProjects: true,
      communityAccess: "Community Access",
      isCommunityAccess: true,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: false,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: false,
      subDomain: "Free Subdomain",
      isSubDomain: false,
      reports: "Monthly Status Reports",
      isReports: false,
    },
    {
      plan: "PLUS",
      price: 9,
      user: "5 Users",
      isUser: true,
      storage: "50 GB",
      isStorage: true,
      publicProjects: "Unlimited Public Projects",
      isPublicProjects: true,
      communityAccess: "Community Access",
      isCommunityAccess: true,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: true,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: true,
      subDomain: "Free Subdomain",
      isSubDomain: true,
      reports: "Monthly Status Reports",
      isReports: false,
    },
    {
      plan: "PRO",
      price: 49,
      user: "Unlimited Users",
      isUser: true,
      storage: "150 GB",
      isStorage: true,
      publicProjects: "Unlimited Public Projects",
      isPublicProjects: true,
      communityAccess: "Community Access",
      isCommunityAccess: true,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: true,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: true,
      subDomain: "Free Subdomains",
      isSubDomain: true,
      reports: "Monthly Status Reports",
      isReports: true,
    },
  ];
  return (
    <div className="pricing py-5">
      <div className="container">
        <div className="row">
          {data.map((item, index) => {
            return <Card data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
