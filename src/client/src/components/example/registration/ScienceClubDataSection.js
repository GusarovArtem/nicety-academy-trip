import {Card, Divider, Form, Input, InputNumber, Select, Upload} from "antd";
import {emailRules, getLengthRules, requiredRules} from "../../logic/validationConfig";
import TextArea from "antd/es/input/TextArea";
import RegistrationTable from "./RegistrationTable";
import {membersConfig} from "./tablesConfig";
import {useEffect, useState} from "react";
import {LoadingOutlined, PlusOutlined, InfoCircleOutlined} from "@ant-design/icons";

export const ScienceClubDataSection = ({
                                           members,
                                           setMembers,
                                           setMessage,
                                           logo,
                                           setLogo,
                                           getBase64,
                                           urlProtocol,
                                           setClubName,
                                           membersError,
                                           validateMembers
                                       }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        validateMembers();
    }, [members]);

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined/> : <PlusOutlined/>}
            <div className="ant-upload-text">Logo KN</div>
        </div>
    );
    const beforeUpload = (file) => false;
    const handleChange = (info) => {
        const isJpgOrPng = info.file.type === 'image/jpeg' || info.file.type === 'image/png';
        if (!isJpgOrPng) {
            setMessage('Tylko pliki w formacie JPG/PNG');
            return;
        }
        const isLt2M = info.file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            setMessage('Rozmiar pliku musi być mniejszy niż 2MB');
            return;
        }
        setLoading(true);
        getBase64(info.file, (imageUrl) => {
            setLoading(false);
            setLogo({
                uid: info.file.uid,
                name: info.file.name,
                url: imageUrl,
            });
        });
    };

    return <Card className="dataCard"
                 title={<div className="section-title">Dane koła naukowego</div>}
                 extra={
                     <Upload
                         name="avatar"
                         listType="picture-card"
                         className="logo-uploader"
                         showUploadList={false}
                         action="/api/logo"
                         beforeUpload={beforeUpload}
                         onChange={handleChange}
                     >
                         {logo.url ? <img src={logo.url} alt="avatar"
                                          style={{maxWidth: '100%', maxHeight: '100%'}}/> : uploadButton}
                     </Upload>
                 }
    >

        <
            Form.Item
            label="Nazwa"
            name="clubName"
            rules={[...requiredRules, ...getLengthRules(255)]}>
            < Input onBlur={(e) => setClubName(e.target.value)}/>
        < /Form.Item>
        <div className="formRow">
            <div className="formCol">
                <Form.Item name="clubNameShort" label="Nazwa skrócona" rules={getLengthRules(40)}>
                    <Input/>
                </Form.Item>
                <Form.Item label="Strona www" name="clubSite" rules={getLengthRules(92)}>
                    <Input addonBefore={
                        <Select defaultValue={urlProtocol}>
                            <Select.Option value="http://">http://</Select.Option>
                            <Select.Option value="https://">https://</Select.Option>
                        </Select>
                    }/>
                </Form.Item>
                <Form.Item name="clubEmail" label="Email" rules={[...emailRules, ...getLengthRules(100)]}>
                    <Input/>
                </Form.Item>
            </div>
            <div className="formCol">
                <Form.Item
                    label={<div>Opis aktywności <div style={{fontSize: 10}}>max 1000 znaków</div></div>}
                    name="clubDescription"
                    rules={getLengthRules(1000)}
                    tooltip={{
                        title: (<>Proszę wskazać zakres działania oraz cele koła naukowego zgodnie z&nbsp;regulaminem koła.</>),
                        color: "#216575",
                        icon: <InfoCircleOutlined style={{position: 'absolute', top: 1, left: 24}}/>,
                    }}
                >
                    <TextArea rows={6}/>
                </Form.Item>
            </div>
        </div>
        <Divider orientation="left" plain>
            Lista członków koła
        </Divider>
        <Form.Item label="Liczba członków" name="clubNumberOfMembers" className="members-count">
            <InputNumber disabled/>
        </Form.Item>
        <RegistrationTable dataSource={members}
                           setDataSource={setMembers}
                           importantAction={false}
                           config={membersConfig}
        />
        <div className={membersError.length ? 'ant-form-item-explain-error' : ''}
             style={{color: '#ff4d4f'}}>
            {membersError}
        </div>
    </Card>
        ;
}