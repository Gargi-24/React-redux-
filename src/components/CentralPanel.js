import React from 'react';
import { connect } from 'react-redux';

class CentralPanel extends React.Component {
    render() {
        let result = null;

        if (this.props.selectedEmployee) {
            result =
                <div>
                    <h4>{this.props.selectedEmployee.id} </h4>
                    <h3>{this.props.selectedEmployee.name}</h3>
                    <h4>{this.props.selectedEmployee.contact}</h4>
                </div>
        }
        else {
            result = <h2> Select Any employee </h2>
        }
        return (
            <div>
                {result}
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

export default connect(mapStateToProps, null)(CentralPanel);