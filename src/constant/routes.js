import React from "react";
import { AiFillDashboard } from "react-icons/ai";

// Dashboards
import Dashboard from "../Pages/Dashbord";
import SalesDashBoard from "../Pages/Dashbord/SalesDashboard";
import HRDashboard from "../Pages/Dashbord/HRDashboard";
import OSDashbord from "../Pages/Dashbord/OutstandingDashboard";

// Tally
import CostCenter from "../Pages/TallyData/CostCenter";
import CostCategory from "../Pages/TallyData/CostCategory";
import Company from "../Pages/TallyData/Company";
import Currency from "../Pages/TallyData/Currency";
import Group from "../Pages/TallyData/Group";
import Ledger from "../Pages/TallyData/Ledger";
import StockCategory from "../Pages/TallyData/StockCategory";
import StockGodown from "../Pages/TallyData/StockGodown";
import StockGroup from "../Pages/TallyData/StockGroup";
import StockItem from "../Pages/TallyData/StockItem";
import StockUnit from "../Pages/TallyData/StockUnit";
import VoucherType from "../Pages/TallyData/VoucherType";

// MASTERS
import DepartmentMaster from "../Pages/Masters/DepartmentMaster";
import DesignationMaster from "../Pages/Masters/DesignationMaster";
import EmployeeMaster from "../Pages/Masters/EmployeeMaster";
import RoleMaster from "../Pages/Masters/RoleMaster";
import UserMaster from "../Pages/Masters/UserMaster";
import Settings from "../Pages/Masters/SettingMaster";

const routes = [
  {
    path: "/postlogin/dashboard",
    icon: AiFillDashboard,
    name: "Dashbord",
    component: Dashboard,
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
        component: OSDashbord,
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
        component: Settings,
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
