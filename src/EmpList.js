import React from 'react';
import EmpItem from './containers/EmpItem';
import List from '@material-ui/core/List';
import { connect } from 'react-redux';
// import { renderEmployees } from './actions';

class EmpList extends React.Component {

    render() {

        let searchQuery = this.props.search.toLowerCase();
        let defaultSet = this.props.employee;
        let newarr = [];

        let filtered = defaultSet.filter(obj => {
            return obj.name.toLowerCase().includes(searchQuery);
        });

        newarr = filtered.map((emp) =>
            <EmpItem key={emp.id} empobj={emp} />)

        return (
            <List>{newarr}</List>
        )

    }

}

function mapStateToProps(state) {

    const { employee, search } = state;
    return {
        employee,
        search
    }

}

export default connect(mapStateToProps, null)(EmpList);