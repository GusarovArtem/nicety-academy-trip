import {useLocation, useNavigate} from 'react-router-dom';
import {CaretDownOutlined} from '@ant-design/icons';
import {Button, Menu} from 'antd';
import {useContext, useEffect, useState} from "react";
import {AppContext} from "./context/context";
import {logout} from "../api/api";
import {MenuOutlined} from "@ant-design/icons";

const getItems = (logged, setLogged, setMessage, setUserClubIds, contests) => (
    [
        {
            label: 'Aktualności',
            key: '/',
        },
        {
            label: 'Lista kół naukowych',
            key: '/kola-naukowe',
        },
        {
            label: <div style={{display: 'flex', color: 'white'}}>Konkursy<CaretDownOutlined
                style={{marginLeft: '10px'}}/></div>,
            key: '/competitions',
            children:
                [
                    ...contests.filter(c => c.status !== '-2')
                        .map(c => (
                            {
                                label: c.year,
                                key: '/konkurs?edycja=' + c.year,
                            }
                        )),
                    ...contests
                        .filter(c => c.status === '-2').length
                        ? [{
                            type: 'group',
                            label: 'Archiwum edycji',
                            children: contests
                                .filter(c => c.status === '-2')
                                .map(c => (
                                    {
                                        label: c.year,
                                        key: '/konkurs?edycja=' + c.year,
                                    }
                                ))
                        }]
                        : [],
                ],
        },
        {
            label: <Button type="primary" style={{
                background: 'black',
                border: '1px solid #216575'
            }}>{logged ? 'Wyloguj się' : 'Logowanie'}</Button>,
            key: '/logowanie',
            ...(logged) && {
                onClick: () => {
                    logout()
                        .then((response) => {
                            setLogged(false);
                            setUserClubIds([]);
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
            },
        },
        {
            label: <Button type="primary">{logged ? 'Edycja' : 'Rejestracja'}</Button>,
            key: logged ? '/edycja-kol' : '/rejestracja',
        },
    ]
)
const Navigation = () => {
    const {logged, setLogged} = useContext(AppContext);
    const {setUserClubIds} = useContext(AppContext);
    const {setMessage} = useContext(AppContext);
    const {contests} = useContext(AppContext);

    const items = getItems(logged, setLogged, setMessage, setUserClubIds, contests);

    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);

    const navigate = useNavigate();
    useEffect(() => {
        setSelected(location.pathname)
    }, [logged]);
    const onClick = (e) => {
        setSelected(e.key);
        if (e.key) {
            navigate(e.key);
        }
    };

    return <Menu
        className="Navigation"
        style={{minWidth: 0}}
        overflowedIndicator={<MenuOutlined style={{color: "#fff", fontSize: 25}}/>}
        selectedKeys={[selected]}
        onClick={onClick}
        mode="horizontal"
        items={items}
    />;
}

export default Navigation;