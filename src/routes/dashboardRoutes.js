// icons ....
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";


// core components/views for Admin layout

import DashboardPage from "../pages/Dashboard/Dashboard.js"
import UserProfile from "../pages/UserProfile/UserProfile.js"
import TableList from "../pages/TableList/TableList";
// import Typography from "views/Typography/Typography.js";
// import Icons from "views/Icons/Icons.js";
// import Maps from "views/Maps/Maps.js";
// import NotificationsPage from "views/Notifications/Notifications.js";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";


const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: Dashboard,
        component: DashboardPage,
        layout: "/admin"
    },
    {
        path: "/user",
        name: "User Profile",
        icon: Person,
        component: UserProfile,
        layout: "/admin"

    },
    {
        path: "/table",
        name: "TableList",
        icon: LibraryBooks,
        component: TableList,
        layout: "/admin"
    }
]

export default dashboardRoutes;