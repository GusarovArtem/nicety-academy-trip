import * as React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import Input from '../Input';
import ErrorMessage from '../ErrorMessage';
import { register } from '../../actions/anon';
import { AnonymousState, AuthState } from '../../types';

interface Props {
    busy: boolean;
    email: string;
}

interface DispatchProps {
    onRegister: (firstName: string, lastName: string, email: string, password: string) => void;
}

interface State {
    firstName?: string;
    lastName?: string;
    password?: string;
    accepted?: boolean;
}

const NAME_RE = /^[\w\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\.'\-\u2012-\u2015\s]+$/;

class LoginRegisterForm extends React.Component<Props & DispatchProps, State> {
    private showLogin: boolean = false;

    constructor(props: Props & DispatchProps) {
        super(props);
        this.state = { firstName: '', lastName: '', password: '', accepted: false };
    }

    handleChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '' || NAME_RE.test(value)) {
            this.setState({ firstName: value });
        }
    }

    handleChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '' || NAME_RE.test(value)) {
            this.setState({ lastName: value });
        }
    }

    handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: e.target.value });
    }

    handleChangeAccepted = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ accepted: e.target.checked });
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!this.canRegister()) { return; }
        this.showLogin = true;
        this.props.onRegister(
            this.state.firstName || '',
            this.state.lastName || '',
            this.props.email || '',
            this.state.password || '');
    }

    canRegister () {
        if (this.props.busy) { return false; }
        return this.formValid();
    }

    formValid () {
        return this.firstNameValid() && this.lastNameValid() && this.passwordValid() && this.acceptedValid();
    }

    firstNameValid () {
        return !!this.state.firstName && this.state.firstName.length >= 2 && this.state.firstName.length <= 64;
    }

    lastNameValid () {
        return !!this.state.lastName && this.state.lastName.length >= 2 && this.state.lastName.length <= 64;
    }

    passwordValid () {
        return !!this.state.password && this.state.password.length >= 5 && this.state.password.length <= 32;
    }

    acceptedValid () {
        return this.state.accepted;
    }

    render() {
        return (
            <div className="login-register-form">
                <h4>Create new Eventory account</h4>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        autoFocus={true}
                        placeholder="First name"
                        value={this.state.firstName || ''}
                        onChange={this.handleChangeFirstName}
                        isValid={this.firstNameValid()}
                        minLength={2}
                        maxLength={64}
                        required={true}
                        errorMessage="This field is required and needs to be at least 2 letters long"
                    />
                    <Input
                        placeholder="Last name"
                        value={this.state.lastName || ''}
                        onChange={this.handleChangeLastName}
                        isValid={this.lastNameValid()}
                        minLength={2}
                        maxLength={64}
                        required={true}
                        errorMessage="This field is required and needs to be at least 2 letters long"
                    />
                    <Input
                        type="password"
                        placeholder="password (5-32 characters)"
                        value={this.state.password || ''}
                        onChange={this.handleChangePassword}
                        isValid={this.passwordValid()}
                        minLength={5}
                        maxLength={32}
                        required={true}
                        errorMessage="This field is required and needs to be between 5 and 32 characters long"
                    />
                    <div className="form-group">
                        <label className="checkbox-inline">
                            <input type="checkbox" checked={this.state.accepted} onChange={this.handleChangeAccepted} />
                            {' '}
                            I have read and agreed to <a href="https://careerplanning.pl/terms" target="_blank">Eventory Terms of Use</a> and <a href="https://careerplanning.pl/privacy-policy" target="_blank">Privacy Policy</a>
                        </label>
                    </div>
                    <div className="form-group"><ErrorMessage /></div>
                    <div className="dialog-buttons">
                        <Button type="submit" disabled={!this.canRegister()} bsStyle="default" bsSize="lg">
                            Next
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ auth, planning }: { auth: AuthState, planning: AnonymousState }): Props {
    return {
        busy: !!(planning.ui && planning.ui.busy),
        // email is always defined here.
        email: auth.email as string,
    };
}

export default connect<Props, DispatchProps>(mapStateToProps, {
    onRegister: register,
})(LoginRegisterForm);
