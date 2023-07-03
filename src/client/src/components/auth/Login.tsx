import * as React from 'react';
import Helmet from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import LoginPasswordForm from './LoginPasswordForm';
import LoginRegisterForm from './LoginRegisterForm';
import { AuthState, CheckEmailStatus } from '../../types';

interface Props {
    checkEmailStatus?: string;
}

class Login extends React.Component<Props> {
    getComponent(): React.ReactNode {
        if (this.props.checkEmailStatus === CheckEmailStatus.EmailExists) {
            return <LoginPasswordForm />;
        }
        if (this.props.checkEmailStatus === CheckEmailStatus.EmailNotExists) {
            return <LoginRegisterForm />;
        }
        return <LoginForm />;
    }

    render() {
        return (
            <div className="auth login-page">
                <Helmet>
                    <title>Register</title>
                    <meta name="description" content="Career Planning - Register - It is a part of the entire Eventory ecosystem, aimed at marketing, sales, IT managers in charge of their team’s budget for conferences, trade shows etc. Working organizers, exhibitors, attendees, seeing their challenges, we try to help them." />
                </Helmet>
                <div className="cta">
                    <div className="cta-bg" />
                    <div className="container">
                        <Row>
                            <Col sm={10} smOffset={1} lg={8} lgOffset={2}>
                                {this.getComponent()}
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="footer-separator" />
            </div>
        );
    }
}

function mapStateToProps({ auth }: { auth: AuthState }): Props {
    return {
        checkEmailStatus: auth.checkEmailStatus,
    };
}

export default connect<Props>(mapStateToProps)(Login);
