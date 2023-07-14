export const department = {
  api: "Master/Department/PostData",
  forms: [
    [
      {
        title: "",
        name: "Department",
        type: "parent",
        rows: [
          {
            col: 4,
            align: "left",
            controls: [
              {
                name: "DepartmentCode",
                value: "",
                type: "input",
                title: "Department Code",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
              {
                name: "DepartmentName",
                value: "",
                type: "input",
                title: "Department Name",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },

              {
                type: "button",
                title: "Save",
                onClick: "handleSubmit",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
              {
                type: "button",
                title: "Reset",
                onClick: "handleReset",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
            ],
          },
        ],
      },
    ],
    [
      {
        title: "",
        name: "departmentTable",
        type: "",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "departmentTable",
                type: "table",
                showEdit: true,
                onEdit: "handleEdit",
                fetch: {
                  api: "Master/Department/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
            ],
          },
        ],
      },
    ],
  ],
};

export const designation = {
  api: "Master/Designation/PostData",
  forms: [
    [
      {
        title: "",
        name: "Designation",
        type: "parent",
        rows: [
          {
            col: 5,
            align: "left",
            controls: [
              {
                name: "DesignationCode",
                value: "",
                type: "input",
                title: "Designation Code",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
              {
                name: "DesignationName",
                value: "",
                type: "input",
                title: "Designation Name",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },

              {
                type: "button",
                title: "Save",
                onClick: "handleSubmit",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
              {
                type: "button",
                title: "Reset",
                onClick: "handleReset",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },

              // {
              //   name: "code",
              //   value: "",
              //   type: "date",
              //   title: "Start Date",
              //   onChange: "handleOnChange",
              //   visible: true,
              //   isValid: true,
              //   validation: {
              //     required: true,
              //   },
              // },
            ],
          },
        ],
      },
    ],
    [
      {
        title: "",
        name: "designationTable",
        type: "",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "designation",
                type: "table",
                showEdit: true,
                onEdit: "handleEdit",
                fetch: {
                  api: "Master/Designation/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
            ],
          },
        ],
      },
    ],
  ],
};

export const employee = {
  api: "Master/Employee/PostData",
  forms: [
    [
      {
        title: "",
        name: "Employee",
        type: "parent",
        rows: [
          {
            col: 4,
            align: "left",
            controls: [
              {
                name: "EmployeeCode",
                value: "",
                type: "input",
                title: "Employee Code",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
              {
                name: "EmployeeName",
                value: "",
                type: "input",
                title: "Employee Name",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },

              {
                name: "Gender",
                value: "",
                type: "select",
                title: "Gender",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
                options: [
                  [1, "Male"],
                  [2, "Female"],
                ],
                selector: "Select Gender",
                fetch: {
                  api: "Master/Value/GetByIdData/",
                  data: {
                    ValueId: "0",
                    KeyId: "3",
                  },
                  fields: ["ValueId", "ValueName"],
                },
              },
              {
                name: "DepartmentId",
                value: "",
                type: "select",
                title: "Department",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
                options: [],
                selector: "Select Department",
                fetch: {
                  api: "Master/Department/GetByIdData",
                  data: {},
                  fields: ["DepartmentId", "DepartmentName"],
                },
              },
              {
                name: "DesignationId",
                value: "",
                type: "select",
                title: "designation",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
                options: [],
                selector: "Select Designation",
                fetch: {
                  api: "Master/Designation/GetByIdData",
                  data: {},
                  fields: ["DesignationId", "DesignationName"],
                },
              },
              {
                name: "ReportingMgr",
                value: "",
                type: "select",
                title: "Reporting Manager",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
                options: [],
                selector: "Select Reporting Manager",
                fetch: {
                  api: "Master/Employee/GetByIdData",
                  data: {},
                  fields: ["EmployeeId", "EmployeeName"],
                },
              },
              {
                name: "AddressLine1",
                value: "",
                type: "input",
                title: "Address Line 1",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
              {
                name: "AddressLine2",
                value: "",
                type: "input",
                title: "Address Line 2",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: false,
                },
              },
              {
                name: "AddressLine3",
                value: "",
                type: "input",
                title: "Address Line 3",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: false,
                },
              },
              {
                name: "Country",
                value: "",
                type: "select",
                title: "Country",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: false,
                },
                options: [],
                selector: "Select Country",
                fetch: {
                  api: "Master/Country/GetByIdData",
                  data: {},
                  fields: ["CountryId", "CountryName"],
                },
              },
              {
                name: "State",
                value: "",
                type: "select",
                title: "state",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: false,
                },
                options: [],
                selector: "Select State",
                fetch: {
                  api: "",
                  data: {},
                  fields: ["StateId", "StateName"],
                },
              },
              {
                name: "City",
                value: "",
                type: "select",
                title: "city",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: false,
                },
                options: [],
                selector: "Select City",
                fetch: {
                  api: "",
                  data: {},
                  fields: ["CityId", "CityName"],
                },
              },

              {
                name: "Pincode",
                value: "",
                type: "input",
                title: "Pin Code",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: false,
                },
              },

              {
                name: "Mobile",
                value: "",
                type: "input",
                title: "Mobile",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },

              {
                name: "Email",
                value: "",
                type: "input",
                title: "email",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },

              {
                name: "JoinDate",
                value: "",
                type: "date",
                title: "Joining Date",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },

              {
                type: "button",
                title: "Save",
                onClick: "handleSubmit",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
              {
                type: "button",
                title: "Reset",
                onClick: "handleReset",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
            ],
          },
        ],
      },
    ],
    [
      {
        title: "",
        name: "employeeTable",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "employeeTable",
                type: "table",
                showEdit: true,
                onEdit: "handleEdit",
                fetch: {
                  api: "Master/Employee/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
            ],
          },
        ],
      },
    ],
  ],
};

export const role = {
  api: "Master/Role/PostData",
  forms: [
    [
      {
        title: "",
        name: "Role",
        type: "parent",
        rows: [
          {
            col: 4,
            align: "left",
            controls: [
              {
                name: "RoleName",
                value: "",
                type: "input",
                title: "Role",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },

              {
                type: "button",
                title: "Save",
                onClick: "handleSubmit",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
              {
                type: "button",
                title: "Reset",
                onClick: "handleReset",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
            ],
          },
        ],
      },
    ],
    [
      {
        title: "",
        name: "roleTable",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "role",
                type: "table",
                showEdit: true,
                onEdit: "handleEdit",
                fetch: {
                  api: "Master/Role/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
            ],
          },
        ],
      },
    ],
  ],
};

export const user = {
  api: "Master/User/PostData",
  forms: [
    [
      {
        title: "",
        name: "User",
        type: "parent",
        rows: [
          {
            col: 4,
            align: "left",
            controls: [
              {
                name: "userType",
                value: "",
                type: "select",
                title: "User Type",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
                options: [
                  { userId: 1, userName: "Employee" },
                  { userId: 2, userName: "Company" },
                ],
                selector: "Select User Type",
                fetch: {
                  api: "",
                  data: {},
                  fields: ["userId", "userName"],
                },
              },
              {
                name: "UserName",
                value: "",
                type: "input",
                title: "User Name",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },

              {
                name: "EmployeeId",
                value: "",
                type: "select",
                title: "Employee",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
                options: [],
                selector: "Select Employee",
                fetch: {
                  api: "Master/Employee/GetByIdData",
                  data: {},
                  fields: ["EmployeeCode", "EmployeeName"],
                },
              },

              {
                name: "Email",
                value: "",
                type: "input",
                title: "Email ID",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },

              {
                name: "Mobile",
                value: "",
                type: "input",
                title: "Mobile",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
              {
                name: "Password",
                value: "",
                type: "password",
                title: "Password",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
              {
                name: "confirmPassword",
                value: "",
                type: "password",
                title: "Confirm Password",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
              {
                name: "Role",
                value: [],
                type: "multiselect",
                title: "Role",
                onChange: "handleOnChange",
                multi: true,
                rows: 5,
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
                options: [],
                selector: "Select Employee",
                fetch: {
                  api: "Master/Role/GetByIdData",
                  data: {},
                  fields: ["RoleId", "RoleName"],
                },
              },
              {
                name: "active",
                value: "",
                type: "checkbox",
                title: "Active",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: false,
                },
              },

              {
                type: "button",
                title: "Save",
                onClick: "handleSubmit",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },

              {
                type: "button",
                title: "Reset",
                onClick: "handleReset",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
            ],
          },
        ],
      },
    ],
    [
      {
        title: "",
        name: "userMasterTable",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "User",
                type: "table",
                showEdit: true,
                onEdit: "handleEdit",
                fetch: {
                  api: "Master/User/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
            ],
          },
        ],
      },
    ],
  ],
};

export const setting = {
  api: "Master/Setting/PostData",
  forms: [
    [
      {
        title: "",
        name: "Setting",
        type: "parent",
        rows: [
          {
            col: 4,
            align: "left",
            controls: [
              {
                name: "SettingName",
                value: "",
                type: "input",
                title: "Setting Name",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
              {
                name: "SettingValue",
                value: "",
                type: "input",
                title: "Setting Value",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
              {
                name: "Description",
                value: "",
                type: "input",
                title: "Description",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },

              {
                name: "isActive",
                value: "",
                type: "input",
                title: "Setting Value",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
              {
                type: "button",
                title: "Save",
                onClick: "handleSubmit",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
              {
                type: "button",
                title: "Reset",
                onClick: "handleReset",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
            ],
          },
        ],
      },
    ],
    [
      {
        title: "",
        name: "settingTable",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "settingMaster",
                showEdit: true,
                onEdit: "handleEdit",
                type: "table",
                fetch: {
                  api: "Master/Setting/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
            ],
          },
        ],
      },
    ],
  ],
};
