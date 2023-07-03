import {Button, Card, Divider, Form, Upload} from "antd";
import RegistrationTable from "./RegistrationTable";
import {defaultConfig, publicationsConfig} from "./tablesConfig";
import TextArea from "antd/es/input/TextArea";
import {UploadOutlined} from "@ant-design/icons";

export function ScienceClubAchievementsSection({
                                                   publications,
                                                   setPublications,
                                                   training,
                                                   setTraining,
                                                   conferences,
                                                   setConferences,
                                                   culturalEvents,
                                                   setCulturalEvents,
                                                   sciencePromotion,
                                                   setSciencePromotion,
                                                   documentsProps,
                                                   photosProps,
                                               }) {
    return <Card title={<div className="section-title">Osiągnięcia</div>}>

        <Divider orientation="left" plain>
            Prace badawcze / publikacje / referaty
        </Divider>
        <RegistrationTable dataSource={publications}
                           setDataSource={setPublications}
                           config={publicationsConfig}/>

        <Divider orientation="left" plain>
            Szkolenia / warsztaty / kursy
        </Divider>
        <RegistrationTable dataSource={training}
                           setDataSource={setTraining}
                           config={defaultConfig}/>

        <Divider orientation="left" plain>
            Konferencje / obozy / spotkania
        </Divider>
        <RegistrationTable dataSource={conferences} 
                           setDataSource={setConferences}
                           config={defaultConfig}/>

        <Divider orientation="left" plain>
            Działalność charytatywna / imprezy kulturalne
        </Divider>
        <RegistrationTable dataSource={culturalEvents}
                           setDataSource={setCulturalEvents}
                           config={defaultConfig}/>

        <Divider orientation="left" plain>
            Promocja nauki / konkursy
        </Divider>
        <RegistrationTable dataSource={sciencePromotion}
                           setDataSource={setSciencePromotion}
                           config={defaultConfig}/>

        <Divider orientation="left" plain>
            Inne osiągnięcia
        </Divider>
        <Form.Item label="Grant rektora" name="clubRectorsGrant">
            <TextArea rows={4}/>
        </Form.Item>
        <Form.Item label="Inna działalność" name="clubActivity">
            <TextArea rows={4}/>
        </Form.Item>
        <Divider orientation="left" plain>
            Załączniki
        </Divider>
        <div className="formRow">
            <div className="formCol uploadContainer">
                <div>Dokumenty</div>
                <Upload {...documentsProps}>
                    <Button icon={<UploadOutlined/>}>Dodaj dokument</Button>
                </Upload>

            </div>
            <div className="formCol uploadContainer">
                <div>Zdjęcia</div>
                <Upload {...photosProps}>
                    <Button icon={<UploadOutlined/>}>Dodaj zdjęcie</Button>
                </Upload>
            </div>
        </div>
    </Card>;
}