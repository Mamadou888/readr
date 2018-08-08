import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import DbFunctionality from '../db/functionality/firebase';

import RequestSection from '../components/RequestSection';
import { base } from '../db/database';


const styles = theme => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
    }
});

class Requests extends Component {
    constructor() {
        super();
        this.state = {
            requests: { 3: "hi"},
        };
    }

    componentWillMount() {
        // this.state.requests = firebase/requests
        this.requestRef = base.syncState('requests', {
            context: this,
            state:'requests'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.requestRef);
    }

    render() {
        // const {classes} = this.props;
        return (
            <div>
                    <h1>Requests Page</h1>
                    <p>{Object.keys(this.state.requests).map((k) => {
                        console.log(3);
                        return <p>{this.state.requests[k].id}</p>
                    })}</p>
                <RequestSection>Requests</RequestSection>
                <RequestSection>Requested</RequestSection>
                <RequestSection>Accepted</RequestSection>
                <RequestSection>Declined</RequestSection>
            </div>
        );
    }
}

// Requests.propTypes = {
//     classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(Requests);
