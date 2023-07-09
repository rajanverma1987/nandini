export const department = {
  api: "",
  forms: [
    [
      {
        title: "",
        name: "department",
        type: "parent",
        rows: [
          {
            col: 4,
            align: "left",
            controls: [
              {
                name: "Code",
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
                name: "name",
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
            ],
          },
        ],
      },
    ],
    [
      {
        title: "",
        name: "departmentTable",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "departmentTable",
                type: "table",
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
  api: "",
  forms: [
    [
      {
        title: "",
        name: "designation",
        type: "parent",
        rows: [
          {
            col: 4,
            align: "left",
            controls: [
              {
                name: "Code",
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
                name: "name",
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
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "designation",
                type: "table",
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
  api: "",
  forms: [
    [
      {
        title: "",
        name: "employee",
        type: "parent",
        rows: [
          {
            col: 4,
            align: "left",
            controls: [
              {
                name: "Code",
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
                name: "name",
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
                name: "gender",
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
                  api: "",
                  data: {},
                  fields: ["it", "title"],
                },
              },
              {
                name: "department",
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
                  data: { CompanyId: 1 },
                  fields: ["DepartmentId", "DepartmentName"],
                },
              },
              {
                name: "designation",
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
                  data: { CompanyId: 1 },
                  fields: ["DesignationId", "DesignationName"],
                },
              },
              {
                name: "address1",
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
                name: "address2",
                value: "",
                type: "input",
                title: "Address Line 2",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
              {
                name: "address3",
                value: "",
                type: "input",
                title: "Address Line 3",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },
              {
                name: "country",
                value: "",
                type: "select",
                title: "Country",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
                options: [],
                selector: "Select Country",
              },
              {
                name: "state",
                value: "",
                type: "select",
                title: "state",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
                options: [],
                selector: "Select State",
              },
              {
                name: "city",
                value: "",
                type: "select",
                title: "city",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
                options: [],
                selector: "Select City",
              },

              {
                name: "pinCode",
                value: "",
                type: "input",
                title: "Pin Code",
                onChange: "handleOnChange",
                visible: true,
                isValid: true,
                validation: {
                  required: true,
                },
              },

              {
                name: "mobile",
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
                name: "email",
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
                name: "joinDate",
                value: "",
                type: "date",
                title: "Join Date",
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
  api: "",
  forms: [
    [
      {
        title: "",
        name: "role",
        type: "parent",
        rows: [
          {
            col: 4,
            align: "left",
            controls: [
              {
                name: "role",
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
                fetch: {
                  api: "Master/UserRole/GetByIdData",
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
  api: "",
  forms: [
    [
      {
        title: "",
        name: "user",
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
                options: [],
                selector: "Select User Type",
                fetch: {
                  api: "Master/Role/GetByIdData",
                  data: { CompanyId: 1 },
                  fields: ["RoleId", "RoleName"],
                },
              },
              {
                name: "userName",
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
                name: "employee",
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
              },

              {
                name: "email",
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
                name: "mobile",
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
                name: "active",
                value: "",
                type: "checkbox",
                title: "Active",
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
                name: "user",
                type: "table",
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
  api: "",
  forms: [
    [
      {
        title: "",
        name: "setting",
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
                name: "setting",
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
