import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { connect } from 'react-redux';
import { selectEmployee } from '../actions';

class EmpItem extends React.Component {

    render() {

        let isSelected = false;
        if (this.props.selectedEmployee === this.props.empobj)
            isSelected = true;

        return (
            <div>
                <ListItem selected={isSelected} onClick={(e) => this.props.selectEmployee(this.props.empobj)}>{this.props.empobj.name}</ListItem>
            </div>
        );
    }


}

function mapStateToProps(state) {
    const { selectedEmployee } = state;
    return {
        selectedEmployee
    }
}

export default connect(mapStateToProps, { selectEmployee })(EmpItem);