import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import apps from './aaps.json'
import { Padding } from '@mui/icons-material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import '../../assets/login.css';

import Table from '../../Table/Table';
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { companyAction } from '../../_actions/company.action';
import { status } from '../../_constants';
import { connect } from 'react-redux';

import { groupAction, lederAction, stockCategoryAction } from '../../_actions';
import { Button } from '@mui/material';

import { REFRESH_ICON } from '../../constant/Images';

class StockCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requiData: {
        CompanyID: null
      },
      columnDefs: [
        { field: 'CompanyName' },
        { field: 'Name' },
        { field: 'NameMasterID' },
        { field: 'GUID' },
        { field: 'AlterID' },
        { field: 'ParentGUID' }
      ],
      rowData: [],
      dropdowndata: [],
      filterRowData: []
    };
  }

 

  componentDidUpdate(prevProps, prevState) {
    if (this.props.get_company_status !== prevProps.get_company_status && this.props.get_company_status == status.SUCCESS) {
     
      if (this.props.get_company_data.Data && this.props.get_company_data.Data.length > 0) {
        let drop_down_data = [{ ID: "", RemoteCmpName: "-select-" }]
        this.props.get_company_data.Data.map((item) => {
          drop_down_data.push(item)
        })
        this.setState({
          dropdowndata: drop_down_data,
          rowData: this.props.get_company_data.Data,
        })
      }
    }
    if (this.props.get_stock_category_status !== prevProps.get_stock_category_status && this.props.get_stock_category_status == status.SUCCESS) {
      if (this.props.stock_category_list) {
        this.setState({
          filterRowData: this.props.stock_category_list.Data,
        })
      }
    }
  }

  handleStateChange = (e) => {
    const { name, value } = e.target;
    const { requiData } = this.state;
    requiData[name] = value;
    this.setState({
      requiData,
    });

  };

  componentDidMount = () => {
    let getDrop = localStorage.getItem("selectedOption");
    const dropDownData = JSON.parse(getDrop)
    this.setState({
      dropDownData
    })
  }
  refreshData = () => {
    const { dropDownData } = this.state;
    if (dropDownData) {
      this.props.dispatch(stockCategoryAction.getStockCategoryById({ CompanyID: dropDownData }))
    }
  }
  dropDownList = (dropData) => {
    if (dropData?.Data) {
      let retData = [];
      for (let i = 0; i < dropData?.Data.length; i++) {
        let row = dropData.Data[i]
        if (row) {
          retData.push(
            <>
              <option value={row.ID} >{row.RemoteCmpName}</option>
            </>
          );
        }
      }
      return retData;
    }
  }
  render() {
    const { requiData, columnDefs, dropdowndata } = this.state;
    return (
      <>
        <div className='form-container'>
          <div className="col-12 col-sm-12 col-md-4">
            <div className="form-group form-group-common d-flex">
        
              <Button variant="contained" className="action-button-theme ml-4" onClick={this.refreshData}>
              <img src={REFRESH_ICON} alt="" title="Reload" />
              </Button>
            </div>
          </div>

          <div >
            <Table columnDefs={columnDefs} rowData={this.state.filterRowData} />
          </div>
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  const { get_company_data, get_company_status, get_stock_category_status, stock_category_list } = state.procurement;
  return {
    get_company_data,
    get_company_status,
    get_stock_category_status,
    stock_category_list
  };
}

const connectedLogin = connect(mapStateToProps)(StockCategory);
export default (connectedLogin);
