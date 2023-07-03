import * as React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import ErrorMessage from '../ErrorMessage';
import Input from '../Input';
import { AnonymousState, AuthState } from '../../types';
import { login } from '../../actions/anon';
import { showForgotPassword } from '../../actions';

interface Props {
    busy: boolean;
    email: string;
}

interface DispatchProps {
    onLogin: (email: string, password: string) => void;
    onForgotPassword: () => void;
}

interface State {
    password?: string;
}

class LoginPasswordForm extends React.Component<Props & DispatchProps, State> {
    constructor(props: Props & DispatchProps) {
        super(props);
        this.state = { password: '' };
        this.onForgotPassword = this.onForgotPassword.bind(this);
    }

    handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: e.target.value });
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!this.canLogin()) { return; }
        this.props.onLogin(this.props.email || '', this.state.password || '');
    }

    onForgotPassword() {
        if (this.props.busy) { return undefined; }
        return this.props.onForgotPassword();
    }

    canLogin () {
        if (this.props.busy) { return false; }
        return this.passwordValid();
    }

    passwordValid () {
        return !!this.state.password && this.state.password.length >= 5 && this.state.password.length <= 32;
    }

    render() {
        return (
            <div className="login-password-form">
                <h4>Log in to your Eventory account</h4>
                <p className="login-password-desc">Your <strong>Career Planning</strong> password is the same as the password to your existing <span className="password">{this.props.email}</span> Eventory account.</p>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        autoFocus={true}
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
                    <ErrorMessage />
                    <p className="forgot-password">
                        <a role="button" onClick={this.onForgotPassword}>Forgot my password</a>
                    </p>
                    <div className="dialog-buttons">
                        <Button type="submit" disabled={!this.canLogin()} bsStyle="default" bsSize="lg">
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
    onLogin: login,
    onForgotPassword: showForgotPassword,
})(LoginPasswordForm);
