export const loginForm = {
  api: "Master/Employee/PostData",
  forms: [
    [
      {
        title: "",
        name: "login",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "Email",
                value: "",
                type: "email",
                title: "Email",
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
                type: "button",
                title: "Login",
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
  ],
};
