import React from 'react';
import EmpList from '../EmpList';
import Search from '../Search';
import List from '@material-ui/core/List';

class LeftNav extends React.Component {

    render() {
        return (
            <List>
                <Search />
                <EmpList />
            </List>
        );
    }
}
export default LeftNav;

