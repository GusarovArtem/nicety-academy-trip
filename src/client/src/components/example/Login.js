import {Button, Checkbox, Form, Input} from 'antd';
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "./context/context";
import {login} from "../api/api";
import InfoModal from "./InfoModal";
import {aghEmailRules, passwordRules} from "../logic/validationConfig";

const Login = () => {
    const navigate = useNavigate();
    const {message, setMessage} = useContext(AppContext);
    const {logged, setLogged} = useContext(AppContext);
    const {setUserClubIds} = useContext(AppContext);
    const handleOk = () => {
        setMessage('');
        logged && navigate('/edycja-kol');
    };

    const onFinish = (values) => {
        login({username: values.username, password: values.password})
            .then((response) => {
                setMessage(response.msg);
                setLogged(true);
                setUserClubIds(response.userClubListIds);
            }).catch((response) => {
            response.json()
                .then((json) => {
                    setMessage(json.msg);
                }).catch((e) => {
                setMessage('Wystąpił błąd');
            })
        });
    };

    const remindPassword = () => {
        navigate('/resetHaslo');
    }

    return (
        <div className="Login page-container">
            <InfoModal message={message} handleOk={handleOk}>
            </InfoModal>
            <Form
                name="basic"
                labelCol={{span: 4,}}
                wrapperCol={{span: 16}}
                className="login-form"
                initialValues={{remember: false,}}
                onFinish={onFinish}
                autoComplete="off"
            >
                <div className="section-title" style={{marginBottom: '40px',}}>Logowanie</div>
                <Form.Item
                    label="Email"
                    name="username"
                    rules={aghEmailRules}
                >
                    <Input onPaste={(e) => {
                        e.preventDefault();
                    }}/>
                </Form.Item>

                <Form.Item
                    label="Hasło"
                    name="password"
                    rules={passwordRules}
                >
                    <Input.Password onPaste={(e) => {
                        e.preventDefault();
                    }}/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 16,
                    }}>
                    {/*<Form.Item name="remember" valuePropName="checked" noStyle>*/}
                    {/*    <Checkbox>Zapamiętaj mnie</Checkbox>*/}
                    {/*</Form.Item>*/}

                    <Button type="link" className="login-form-forgot" style={{float: 'right',}}
                            onClick={remindPassword}>
                        Zapomniałem hasła
                    </Button>

                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Zaloguj się
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};

export default Login;