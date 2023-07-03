import {Card, Form, Input} from "antd";
import {aghEmailRules, getLengthRules, passwordRules, requiredRules} from "../../logic/validationConfig";

export const ScienceClubAdminSection = ({logged}) => {
    return <Card title={<div className="section-title">Administrator koła naukowego</div>}>
        <div className="formRow">
            <Form.Item label="Imię" name="adminName" rules={[...requiredRules, ...getLengthRules(100)]}>
                <Input/>
            </Form.Item>
            <Form.Item label="Nazwisko" name="adminSurname" rules={[...requiredRules, ...getLengthRules(100)]}>
                <Input/>
            </Form.Item>
        </div>
        {!logged && <div className="formRow">
            <div className="formCol">
                <Form.Item name="adminEmail" label="Email (login)"
                           rules={[...aghEmailRules, ...getLengthRules(100)]}>
                    <Input onPaste={(e) => {
                        e.preventDefault();
                    }}/>
                </Form.Item>
                <Form.Item name="confirmAdminEmail" label="Powtórz email"
                           rules={[...aghEmailRules, ...getLengthRules(100),
                               ({getFieldValue}) => ({
                                   validator(_, value) {
                                       if (!value || getFieldValue('adminEmail') === value) {
                                           return Promise.resolve();
                                       }
                                       return Promise.reject(new Error('Adresy email muszą być zgodne'));
                                   },
                               }),
                           ]}>
                    <Input onPaste={(e) => {
                        e.preventDefault();
                    }}/>
                </Form.Item>
            </div>
            <div className="formCol">
                <Form.Item name="adminPassword" label="Hasło" rules={[...passwordRules, ...getLengthRules(200)]}
                           hasFeedback>
                    <Input.Password onPaste={(e) => {
                        e.preventDefault();
                    }}/>
                </Form.Item>
                <Form.Item name="confirmPassword" label="Powtórz hasło" dependencies={['adminPassword']}
                           hasFeedback
                           rules={[...passwordRules, ...getLengthRules(200),
                               ({getFieldValue}) => ({
                                   validator(_, value) {
                                       if (!value || getFieldValue('adminPassword') === value) {
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
            </div>
        </div>}
    </Card>;
}