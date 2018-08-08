import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const RequestSection = (props) => {

    return (
        <div>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={< ExpandMoreIcon />}>
                    <Typography >{props.children}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
};

export default RequestSection;

//disabled section

{/* <ExpansionPanel disabled>
    <ExpansionPanelSummary expandIcon={< ExpandMoreIcon />}>
        <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
    </ExpansionPanelSummary>
</ExpansionPanel> */}
