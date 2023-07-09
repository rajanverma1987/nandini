export const company = {
  api: "",
  forms: [
    [
      {
        title: "",
        name: "company",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "company",
                type: "table",

                fetch: {
                  api: "Company/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
              },
            ],
          },
        ],
      },
    ],
  ],
};

export const costCategory = {
  api: "",
  forms: [
    [
      {
        title: "",
        name: "CostCategory",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "CostCategory",
                type: "table",

                fetch: {
                  api: "CostCategory/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
              },
            ],
          },
        ],
      },
    ],
  ],
};

export const costCenter = {
  api: "",
  forms: [
    [
      {
        title: "",
        name: "costCenter",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "costCenter",
                type: "table",

                fetch: {
                  api: "CostCenter/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
              },
            ],
          },
        ],
      },
    ],
  ],
};
export const currency = {
  api: "",
  forms: [
    [
      {
        title: "",
        name: "currency",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "currency",
                type: "table",

                fetch: {
                  api: "Currency/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
              },
            ],
          },
        ],
      },
    ],
  ],
};
export const group = {
  api: "",
  forms: [
    [
      {
        title: "",
        name: "group",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "group",
                type: "table",

                fetch: {
                  api: "Group/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
              },
            ],
          },
        ],
      },
    ],
  ],
};

export const ledger = {
  api: "",
  forms: [
    [
      {
        title: "",
        name: "ledger",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "ledger",
                type: "table",

                fetch: {
                  api: "Ledger/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
              },
            ],
          },
        ],
      },
    ],
  ],
};

export const stockCategory = {
  api: "",
  forms: [
    [
      {
        title: "",
        name: "stockCategory",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "stockCategory",
                type: "table",

                fetch: {
                  api: "StockCategory/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
              },
            ],
          },
        ],
      },
    ],
  ],
};

export const stockGodown = {
  api: "",
  forms: [
    [
      {
        title: "",
        name: "stockGodown",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "stockGodown",
                type: "table",

                fetch: {
                  api: "StockGodown/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
              },
            ],
          },
        ],
      },
    ],
  ],
};

export const stockGroup = {
  api: "",
  forms: [
    [
      {
        title: "",
        name: "stockGroup",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "stockGroup",
                type: "table",

                fetch: {
                  api: "StockGroup/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
              },
            ],
          },
        ],
      },
    ],
  ],
};

export const stockItem = {
  api: "",
  forms: [
    [
      {
        title: "",
        name: "stockItem",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "stockItem",
                type: "table",

                fetch: {
                  api: "StockItem/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
              },
            ],
          },
        ],
      },
    ],
  ],
};

export const stockUnit = {
  api: "",
  forms: [
    [
      {
        title: "",
        name: "stockUnit",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "stockUnit",
                type: "table",

                fetch: {
                  api: "StockUnit/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
              },
            ],
          },
        ],
      },
    ],
  ],
};

export const voucherType = {
  api: "",
  forms: [
    [
      {
        title: "",
        name: "voucherType",
        type: "parent",
        rows: [
          {
            col: 1,
            align: "left",
            controls: [
              {
                name: "voucherType",
                type: "table",
                fetch: {
                  api: "VoucherType/GetByIdData",
                  type: "post",
                  data: {},
                },
                visible: true,
              },
            ],
          },
        ],
      },
    ],
  ],
};
