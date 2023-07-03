import * as React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import FacebookLogin from '../anon/FacebookLogin';
import LinkedInLogin from '../anon/LinkedInLogin';
import ErrorMessage from '../ErrorMessage';
import Input from '../Input';
import { checkEmail } from '../../actions/auth';
import { AnonymousState, AuthState } from '../../types';
import { isEmailValid } from '../../validators/email';

interface Props {
    busy: boolean;
    checkEmailStatus?: string;
    prefillEmail?: string;
}

interface DispatchProps {
    onLogin: (email: string) => void;
}

interface State {
    email?: string;
}

class LoginForm extends React.Component<Props & DispatchProps, State> {
    constructor(props: Props & DispatchProps) {
        super(props);
        this.state = { email: props.prefillEmail || '' };
    }

    handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: e.target.value });
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!this.canLogin()) { return; }
        const email = this.state.email || '';
        this.props.onLogin(email);
    }

    emailValid () {
        return isEmailValid(this.state.email || '');
    }

    canLogin () {
        if (this.props.busy) { return false; }
        return this.emailValid();
    }

    render () {
        return (
            <div className="auth">
                <div className="login-form">
                    <h4>Sign up with your e-mail address:</h4>
                    <form onSubmit={this.handleSubmit}>
                        <Input
                            autoFocus={true}
                            placeholder="e-mail"
                            value={this.state.email || ''}
                            onChange={this.handleChangeEmail}
                            isValid={this.emailValid()}
                            required={true}
                            errorMessage="Please provide a valid email address."
                        />
                        <div className="form-group"><ErrorMessage /></div>
                        <div className="dialog-buttons">
                            <Button type="submit" disabled={!this.canLogin()} bsStyle="default" bsSize="lg">
                                Start planning
                            </Button>
                        </div>
                    </form>
                    <div>
                        <p className="or-use">or use:</p>
                        <div className="form-group">
                            <FacebookLogin />
                        </div>
                        <div className="form-group">
                            <LinkedInLogin />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ planning, auth }: { planning: AnonymousState, auth: AuthState }): Props {
    return {
        busy: !!(planning.ui && planning.ui.busy),
        checkEmailStatus: auth.checkEmailStatus,
        prefillEmail: planning.ui && planning.ui.prefillEmail,
    };
}

export default connect<Props, DispatchProps>(mapStateToProps, {
    onLogin: checkEmail
})(LoginForm);
