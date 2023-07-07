import React, { Component } from 'react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../../assets/login.css';
import Button from '@mui/material/Button';
import Table from '../../Table/Table';
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { companyAction } from '../../_actions/company.action';
import { status } from '../../_constants';
import { connect } from 'react-redux';

import { REFRESH_ICON } from '../../constant/Images';


class Company extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requiData: {
        ID: null
      },
      columnDefs: [
        { field: 'RemoteCmpName' },
        { field: 'RemoteCmpAddress' },
        { field: 'RemoteCmpCountry' },
        { field: 'RemoteCmpState' },
        { field: 'RemoteCmpPincode' },
        { field: 'RemoteCmpEmail' },
        { field: 'RemoteCmpBaseCurrency' },
        { field: 'RemoteCmpBooksDate' },
        { field: 'GSTNo' },
        { field: 'PANNo' }

      ],
      rowData: [],
      dropdowndata: [],
    };

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
      this.props.dispatch(companyAction.getCompanyById({ ID: dropDownData }))
    }
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
    if (this.props.get_company_id_status !== prevProps.get_company_id_status && this.props.get_company_id_status == status.SUCCESS) {
      if (this.props.company_id_list) {
        this.setState({
          filterRowData: this.props.company_id_list.Data,
        })
      }
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
    const { requiData, columnDefs, rowData, filterRowData, dropDownData } = this.state;
    console.log("dropDownData", dropDownData)
    return (
      <>
        <div className='form-container'>
          <div className="col-12 col-sm-12 col-md-4 w-100 ml-0">
            <div className="form-group form-group-common d-flex">
              {/*  */}
              <Button variant="contained" className="action-button-theme ml-4" onClick={this.refreshData}>
                <img src={REFRESH_ICON} alt="" title="Reload" />
              </Button>
            </div>
          </div>
          <Table columnDefs={columnDefs} rowData={filterRowData ? filterRowData : rowData} />
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  const { get_company_data, get_company_status, company_id_list, get_company_id_status } = state.procurement;
  return {
    get_company_data,
    get_company_status,
    company_id_list,
    get_company_id_status
  };
}

const connectedLogin = connect(mapStateToProps)(Company);
export default (connectedLogin);
