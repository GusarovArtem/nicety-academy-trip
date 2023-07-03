import {Button, Card, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {useContext} from "react";
import {AppContext} from "../context/context";

export const ScienceClubFinancialSection = ({planProps, statementsProps}) => {

    const {contests} = useContext(AppContext);
    const activeContest = contests.find(c => c.status === '0' || c.status === '1' || c.status === '-1') || {};

    return <Card title={<div className="section-title">Dokumenty</div>}>
        <div className="formRow">
            <div className="formCol">
                <div className="uploadContainer">
                    <div>
                        <div style={{fontWeight: 'bold'}}>
                            Sprawozdanie finansowe za rok {activeContest.year ? parseInt(activeContest.year) - 1 : ''}
                        </div>
                        <a href={`/assets/documentsPatterns/${activeContest.year}/sprawozdanie-kn-za-${parseInt(activeContest.year) - 1}-wzor.xlsx`}
                           download="">
                            pobierz wzór sprawozdania
                        </a>
                    </div>
                    <Upload {...planProps}>
                        <Button icon={<UploadOutlined/>}>Dodaj (.xlsx)</Button>
                    </Upload>
                </div>
            </div>

            <div className="formCol">
                <div className="uploadContainer">
                    <div>
                        <div style={{fontWeight: 'bold'}}>
                            Plan merytoryczno-finansowy pracy koła na rok {activeContest.year}
                        </div>
                        <a href={`/assets/documentsPatterns/${activeContest.year}/plan-kn-na-${activeContest.year}-wzor.xlsx`}
                           download="">
                            pobierz wzór planu
                        </a>
                    </div>
                    <Upload {...statementsProps}>
                        <Button icon={<UploadOutlined/>}>Dodaj (.xlsx)</Button>
                    </Upload>
                </div>
            </div>
        </div>
    </Card>;
};