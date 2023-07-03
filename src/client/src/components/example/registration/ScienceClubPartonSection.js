import {Card} from "antd";
import RegistrationTable from "./RegistrationTable";
import {patronsConfig} from "./tablesConfig";
import {useEffect} from "react";

export const ScienceClubPartonSection = ({patrons, setPatrons, patronsError, validatePatrons}) => {
    
    useEffect(() => {
        validatePatrons();
    }, [patrons]);
    return <Card title={<div className="section-title">Opiekun naukowy / Opiekunowie naukowi</div>}>
        <RegistrationTable dataSource={patrons}
                           setDataSource={setPatrons}
                           importantAction={false}
                           config={patronsConfig}
                           name="patrons"
        />
        <div className={patronsError.length ? 'ant-form-item-explain-error' : ''}
             style={{color: '#ff4d4f'}}>
            {patronsError}
        </div>
    </Card>;
}