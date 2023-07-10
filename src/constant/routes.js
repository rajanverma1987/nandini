import React from "react";
import { AiFillDashboard, AiOutlineUser } from "react-icons/ai";
import { BsChatRightDots, BsTabletFill } from "react-icons/bs";

const Dashbord = React.lazy(() => import("../Pages/Dashbord"));
const Company = React.lazy(() => import("../Pages/TallyData/Company"));
const CostCategory = React.lazy(() =>
  import("../Pages/TallyData/CostCategory")
);
const CostCenter = React.lazy(() => import("../Pages/TallyData/CostCenter"));
const Currency = React.lazy(() => import("../Pages/TallyData/Currency"));
const Group = React.lazy(() => import("../Pages/TallyData/Group"));
const Ledger = React.lazy(() => import("../Pages/TallyData/Ledger"));
const StockCategory = React.lazy(() =>
  import("../Pages/TallyData/StockCategory")
);
const StockGodown = React.lazy(() => import("../Pages/TallyData/StockGodown"));
const StockGroup = React.lazy(() => import("../Pages/TallyData/StockGroup"));
const StockItem = React.lazy(() => import("../Pages/TallyData/StockItem"));
const StockUnit = React.lazy(() => import("../Pages/TallyData/StockUnit"));
const VoucherType = React.lazy(() => import("../Pages/TallyData/VoucherType"));

// MASTERS
const DepartmentMaster = React.lazy(() =>
  import("../Pages/Masters/DepartmentMaster")
);
const DesignationMaster = React.lazy(() =>
  import("../Pages/Masters/DesignationMaster")
);
const EmployeeMaster = React.lazy(() =>
  import("../Pages/Masters/EmployeeMaster")
);
const RoleMaster = React.lazy(() => import("../Pages/Masters/RoleMaster"));
const SettingMaster = React.lazy(() =>
  import("../Pages/Masters/SettingMaster")
);
const UserMaster = React.lazy(() => import("../Pages/Masters/UserMaster"));

const SalesDashBoard = React.lazy(() =>
  import("../Pages/Dashbord/SalesDashboard")
);
const OSDashBoard = React.lazy(() =>
  import("../Pages/Dashbord/OutstandingDashboard")
);
const HRDashboard = React.lazy(() => import("../Pages/Dashbord/HRDashboard"));

const routes = [
  {
    path: "/postlogin/dashboard",
    icon: AiFillDashboard,
    name: "Dashbord",
    component: Dashbord,
    type: "parent",
  },

  {
    name: "BI Dashbord",
    type: "parent",
    icon: AiFillDashboard,
    children: [
      {
        name: "Sales Dashboard",
        path: "/postlogin/sales",
        component: SalesDashBoard,
      },
      {
        name: "HR Dashboard",
        path: "/postlogin/hr",
        component: HRDashboard,
      },
      {
        name: "Outstanding Dashboard",
        path: "/postlogin/outstanding",
        component: OSDashBoard,
      },
    ],
  },
  {
    name: "Masters",
    type: "parent",
    icon: AiFillDashboard,
    children: [
      {
        path: "/postlogin/designation_master",
        name: "Designation",

        component: DesignationMaster,
      },
      {
        path: "/postlogin/department_master",
        name: "Department",
        //icon: <HiOutlineStar />,
        component: DepartmentMaster,
      },
      {
        path: "/postlogin/employee_master",
        name: "Employee",
        //icon: <IoMdRibbon />,
        component: EmployeeMaster,
      },
      {
        path: "/postlogin/role_master",
        name: "Role",
        //icon: <IoMdWalk />,
        component: RoleMaster,
      },
      {
        path: "/postlogin/user_master",
        name: "User",
        //icon: <HiUserCircle />,
        component: UserMaster,
      },
      {
        path: "/postlogin/setting_master",
        name: "Setting",
        //icon: <IoMdSettings />,
        component: SettingMaster,
      },
    ],
  },
  {
    name: "Tally Data",
    type: "parent",
    icon: AiFillDashboard,
    children: [
      {
        path: "/postlogin/company",
        name: "Company",
        //icon: <IoMdPaperPlane />,
        component: Company,
      },
      {
        path: "/postlogin/cost_category",
        name: "Cost Category",
        //icon: <IoFlagOutline />,
        component: CostCategory,
      },
      {
        path: "/postlogin/cost_center",
        name: "Cost Center",
        //icon: <HiMiniCurrencyDollar />,
        component: CostCenter,
      },
      {
        path: "/postlogin/currency",
        name: "Currency",
        //icon: <HiMiniEye />,
        component: Currency,
      },
      {
        path: "/postlogin/group",
        name: "Group",
        //icon: <HiMiniUserGroup />,
        component: Group,
      },
      {
        path: "/postlogin/ledger",
        name: "Ledger",
        //icon: <HiBookOpen />,
        component: Ledger,
      },
      {
        path: "/postlogin/stock_category",
        name: "Stock Category",
        //icon: <HiSquares2X2 />,
        component: StockCategory,
      },
      {
        path: "/postlogin/stock_godown",
        name: "Stock Godown",
        //icon: <HiSquares2X2 />,
        component: StockGodown,
      },
      {
        path: "/postlogin/stock_group",
        name: "Stock Group",
        //icon: <HiSquares2X2 />,
        component: StockGroup,
      },
      {
        path: "/postlogin/stock_item",
        name: "Stock Item",
        //icon: <HiSquares2X2 />,
        component: StockItem,
      },
      {
        path: "/postlogin/stock_unit",
        name: "Stock Unit",
        //icon: <HiSquares2X2 />,
        component: StockUnit,
      },
      {
        path: "/postlogin/voucher_type",
        name: "Voucher Type",
        //icon: <HiSquares2X2 />,
        component: VoucherType,
      },
    ],
  },
];

export default routes;
