export const loginForm = {
  api: "Login/PostData",
  forms: [
    [
      {
        title: "",
        name: "USERMASTER",
        type: "parent",
        rows: [
          {
            cols: 1,
            align: "center",
            controls: [
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
                btnType: "btnfull",
                title: "Sign In",
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
