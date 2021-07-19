import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';

const Size = () => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: false,
        checkedC: false,
        checkedD: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <Typography>
                Condition
            </Typography>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            color="primary"
                        />
                    }
                    label="34"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="36"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedC}
                            onChange={handleChange}
                            name="checkedC"
                            color="primary"
                        />
                    }
                    label="38"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedD}
                            onChange={handleChange}
                            name="checkedD"
                            color="primary"
                        />
                    }
                    label="40"
                />
            </FormGroup>

        </div>
    );
};

export default Size;