import {Button, Form, Input} from "antd";
import {forgotPassword, resetPassword} from "../api/api";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import InfoModal from "./InfoModal";
import {aghEmailRules, passwordRules} from "../logic/validationConfig";
import {AppContext} from "./context/context";

const ResetPassword = () => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token');

    const navigate = useNavigate();
    const {message, setMessage} = useContext(AppContext);
    const [resetSuccess, setResetSuccess] = useState(false);
    const [form] = Form.useForm();
    const onFinish = (values) => {
        if (token) {
            resetPassword({password: values.password, token: token})
                .then((response) => {
                    setMessage(response.msg);
                    setResetSuccess(true);
                }).catch((response) => {
                response.json()
                    .then((json) => {
                        setMessage(json.msg);
                    }).catch((e) => {
                    setMessage('Wystąpił błąd');
                })
            });

        } else {
            forgotPassword({username: values.username})
                .then((response) => {
                    setMessage(response.msg);
                }).catch((response) => {
                response.json()
                    .then((json) => {
                        setMessage(json.msg);
                    }).catch((e) => {
                    setMessage('Wystąpił błąd');
                })
            });

        }
    };

    const handleOk = () => {
        setMessage('');
        form.resetFields();
        resetSuccess && navigate('/logowanie');
    };

    return (
        <div className="ResetPassword page-container">
            <InfoModal message={message} handleOk={handleOk}>
            </InfoModal>
            <Form
                form={form}
                name="basic"
                labelCol={{span: 4,}}
                wrapperCol={{span: 16,}}
                className="reset-pass-form"
                initialValues={{remember: false,}}
                onFinish={onFinish}
                autoComplete="off"
            >
                <div className="section-title" style={{marginBottom: '40px',}}>Zresetuj hasło</div>
                {!token && <Form.Item
                    label="Email"
                    name="username"
                    rules={aghEmailRules}
                >
                    <Input onPaste={(e) => {
                        e.preventDefault();
                    }}/>
                </Form.Item>}

                {token && <>
                    <Form.Item
                        label="Hasło"
                        name="password"
                        rules={passwordRules}
                    >
                        <Input.Password onPaste={(e) => {
                            e.preventDefault();
                        }}/>
                    </Form.Item>
                    <Form.Item name="confirmPassword" label="Powtórz hasło" dependencies={['password']}
                               hasFeedback
                               rules={[...passwordRules,
                                   ({getFieldValue}) => ({
                                       validator(_, value) {
                                           if (!value || getFieldValue('password') === value) {
                                               return Promise.resolve();
                                           }
                                           return Promise.reject(new Error('Hasła muszą być zgodne'));
                                       },
                                   }),
                               ]}>
                        <Input.Password onPaste={(e) => {
                            e.preventDefault();
                        }}/>
                    </Form.Item>
                </>}

                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        {token ? 'Resetuj hasło' : 'Wyślij link'}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default ResetPassword;