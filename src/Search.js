import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { searchTerm } from './actions';

const styles = theme => ({

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    }
})
class Search extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <TextField
                    id="filled-search"
                    label="Search field"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    onChange={(e) => {
                        this.props.searchTerm(e.target.value)
                    }}
                />
            </div>
        );
    }
}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(null, { searchTerm })(withStyles(styles)(Search));
