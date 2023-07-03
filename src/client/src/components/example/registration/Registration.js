import {Button, Checkbox, Space, Spin} from 'antd';
import {Form} from 'antd';
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../context/context";
import {getUserClubs, getUserData, registerClub, updateClub} from "../../api/api";
import InfoModal from "../InfoModal";
import {ScienceClubAchievementsSection} from "./ScienceClubAchievementsSection";
import {ScienceClubDataSection} from "./ScienceClubDataSection";
import {ScienceClubAdminSection} from "./ScienceClubAdminSection";
import {ScienceClubPartonSection} from "./ScienceClubPartonSection";
import {ScienceClubFinancialSection} from "./ScienceClubFinancialSection";
import {defaultMembers, defaultPatrons} from "./tablesConfig";
import {useLocation, useNavigate} from "react-router-dom";

const Registration = () => {

    const {logged, setLogged} = useContext(AppContext);
    const {userName, setUserName} = useContext(AppContext);
    const {setUserClubIds} = useContext(AppContext);
    const {message, setMessage} = useContext(AppContext);
    const {clubInEdition, setClubInEdition} = useContext(AppContext);
    const {contests} = useContext(AppContext);

    const [urlProtocol, setUrlProtocol] = useState('https://');
    const [conferences, setConferences] = useState([]);
    const [publications, setPublications] = useState([]);
    const [members, setMembers] = useState([]);
    const [patrons, setPatrons] = useState([]);
    const [training, setTraining] = useState([]);
    const [culturalEvents, setCulturalEvents] = useState([]);
    const [sciencePromotion, setSciencePromotion] = useState([]);
    const [documentsList, setDocumentsList] = useState([]);
    const [photosList, setPhotosList] = useState([]);
    const [planList, setPlanList] = useState([]);
    const [statementsList, setStatementsList] = useState([]);
    const [logo, setLogo] = useState({});
    const [form] = Form.useForm();
    const [validationInProgress, setValidationInProgress] = useState(false);
    const [membersError, setMembersError] = useState('');
    const [patronsError, setPatronsError] = useState('');

    const [clubName, setClubName] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    const download = (url, name) => {
        const a = document.createElement('a')
        a.href = url;
        a.download = name;
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }
    const getFilesProps = (list, setList, type, max) => {
        return {
            onRemove: (file) => {
                const index = list.indexOf(file);
                const newFileList = list.slice();
                newFileList.splice(index, 1);
                setList(newFileList);
            },
            beforeUpload: (file) => false,
            onChange: (info) => {
                if (info.file.status === 'removed') {
                    return;
                }
                if (type) {
                    const isRightFormat = info.file.type === type;
                    if (!isRightFormat) {
                        setMessage(`Tylko pliki w formacie XLSX`);
                        return;
                    }
                }
                getBase64(info.file, (url) => {
                    const item = {
                        uid: info.file.uid,
                        name: info.file.name,
                        url: url,
                    }
                    if (max) {
                        setList([...list, item].slice(-1 * max));
                    } else {
                        setList([...list, item]);
                    }
                });
            },
            onDownload: (f) => {
                download(f.url, f.name);
            },
            fileList: list.map(l => ({...l, status: 'done'})),
            showUploadList: {
                showDownloadIcon: true,
                downloadIcon: 'Pobierz',
            },
        }
    };

    const updateUserClubData = () => {
        getUserClubs().then((response) => {
            const clubData = response.find(r => r.clubId == clubInEdition);

            clubData.achievements && setConferences(clubData.achievements
                .filter(a => a.type === 'conference')
                .map(p => ({...p, key: p.id})));
            clubData.achievements && setPublications(clubData.achievements
                .filter(a => a.type === 'publication')
                .map(p => ({...p, key: p.id})));
            clubData.members && setMembers(clubData.members.map(p => ({...p, key: p.id})));
            clubData.patrons && setPatrons(clubData.patrons.map(p => ({...p, key: p.id})));
            clubData.achievements && setTraining(clubData.achievements
                .filter(a => a.type === 'training')
                .map(p => ({...p, key: p.id})));
            clubData.achievements && setCulturalEvents(clubData.achievements
                .filter(a => a.type === 'cultural_event')
                .map(p => ({...p, key: p.id})));
            clubData.achievements && setSciencePromotion(clubData.achievements
                .filter(a => a.type === 'science_promotion')
                .map(p => ({...p, key: p.id})));
            clubData.documentsList && setDocumentsList(clubData.documentsList);
            clubData.photosList && setPhotosList(clubData.photosList);
            clubData.planList && setPlanList(clubData.planList);
            clubData.statementsList && setStatementsList(clubData.statementsList);
            clubData.logo && setLogo(clubData.logo);
            clubData.clubName && setClubName(clubData.clubName);

            let url = null;
            try {
                url = new URL(clubData.clubSite);
            } catch (e) {
            }
            url && setUrlProtocol(url.protocol + '//');

            const initialValues = {
                adminName: clubData.adminName || '',
                adminSurname: clubData.adminSurname || '',
                clubActivity: clubData.clubActivity || '',
                clubAddress: clubData.clubAddress || '',
                clubCity: clubData.clubCity || '',
                clubDescription: clubData.clubDescription || '',
                clubEmail: clubData.clubEmail || '',
                clubName: clubData.clubName || '',
                clubNameShort: clubData.clubNameShort || '',
                clubNumberOfMembers: clubData.clubNumberOfMembers || 0,
                clubPhone: clubData.clubPhone || '',
                clubRectorsGrant: clubData.clubRectorsGrant || '',
                clubSite: url ? url.hostname : '',
                clubZip: clubData.clubZip || '',
                contestAgree: clubData.contestAgree
            }

            form.setFieldsValue(initialValues);
            setLoading(false);
        }).catch((response) => {
            setLoading(false);
            if (response.status === 440) {
                setLogged(false);
                navigate('/logowanie')
            }
            response.json()
                .then((json) => {
                    setMessage(json.msg);
                }).catch((e) => {
                setMessage('Wystąpił błąd');
            })
        })
    }

    useEffect(() => {
        return () => {
            setClubInEdition('');
        };
    },[]);

    const location = useLocation();
    useEffect(() => {
        if (clubInEdition) {
            updateUserClubData();
        } else {
            setMembers(defaultMembers);
            setPatrons(defaultPatrons);
            setLoading(false);
            logged && form.setFieldsValue(userName);
            if (location.pathname === '/edycja-kola') {
                navigate('/edycja-kol');
            }
        }
    }, [logged]);

    useEffect(() => {
        form.setFieldsValue({
            clubNumberOfMembers: members.length,
        });
    }, [members]);

    const handleOk = () => {
        setMessage('');
    };

    const onFinish = (values) => {

        const obj = {
            ...(clubInEdition.length && {id: clubInEdition}),
            ...values,
            clubSite: values.clubSite ? urlProtocol + values.clubSite : '',
            members: members.map(({key, ...rest}) => rest),
            patrons: patrons.map(({key, ...rest}) => rest),
            publications: publications.map(({key, ...rest}) => rest),
            conferences: conferences.map(({key, ...rest}) => rest),
            training: training.map(({key, ...rest}) => rest),
            culturalEvents: culturalEvents.map(({key, ...rest}) => rest),
            sciencePromotion: sciencePromotion.map(({key, ...rest}) => rest),
            logo,
            planList,
            statementsList,
            documentsList,
            photosList,
        };
        if (clubInEdition) {
            updateClub(obj)
                .then((response) => {
                    setMessage(response.msg);
                    updateUserClubData();
                }).catch((response) => {
                if (response.status === 440) {
                    setLogged(false);
                    navigate('/logowanie')
                }
                response.json()
                    .then((json) => {
                        setMessage(json.msg);
                    }).catch((e) => {
                    setMessage('Wystąpił błąd');
                })
            });
        } else {
            registerClub(obj)
                .then((response) => {
                    setMessage(response.msg);

                    form.resetFields()
                    setConferences([]);
                    setPublications([]);
                    setTraining([]);
                    setCulturalEvents([]);
                    setSciencePromotion([]);
                    setDocumentsList([]);
                    setPhotosList([]);
                    setPlanList([]);
                    setStatementsList([]);
                    setLogo({});

                    setPatrons([]);
                    setMembers([]);
                    setTimeout(() => {
                        setPatrons(defaultPatrons)
                        setMembers(defaultMembers)
                    }, 0);

                    getUserData().then(response => {
                        setUserClubIds(response.userClubListIds);
                        setUserName({adminName: response.userName, adminSurname: response.userSurname});
                    }).catch((response) => {});
                    logged && navigate('/edycja-kol');
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

    const validateMembers = () => {
        const president = members.filter(m => m.function.toLowerCase() === 'prezes');
        const secretary = members.filter(m => m.function.toLowerCase() === 'sekretarz');
        const treasurer = members.filter(m => m.function.toLowerCase() === 'skarbnik');

        const valid = !!(president.length && secretary.length && treasurer.length);
        if (valid) {
            setMembersError('');
        } else {
            setMembersError('Lista członków koła powinna zawierać m.in. pozycje: prezesa, sekretarza oraz skarbnika');
        }

        return valid;
    }

    const validatePatrons = () => {
        const valid = !!patrons.length;
        if (valid) {
            setPatronsError('');
        } else {
            setPatronsError('Lista opiekunów koła powinna zawierać przynajmniej jedną pozycję');
        }
        return valid;
    }
    const onFormFinish = async (name, {values, forms}) => {

        let valid = validateMembers() && validatePatrons();
        const validateForm = async (form) => {
            try {
                await form.validateFields();
            } catch (errInfo) {
                valid = false;
            }
        };
        await Promise.all(Object.values(forms).map(f => {
            return validateForm(f)
        }));

        if (valid) {
            onFinish(forms.basic.getFieldsValue());
        } else {
            setTimeout(() => {
                document
                    .getElementsByClassName('ant-form-item-explain-error')[0]
                    .scrollIntoView({behavior: "smooth"})
            }, 500);
        }
    }

    const activeContest = contests.find(c => c.status === '1');

    return clubInEdition && loading
        ? (
            <div className="loading">
                <Spin size="large"/>
            </div>
        )
        : (
            <div className="Registration page-container">
                <InfoModal message={message} handleOk={handleOk}>
                </InfoModal>
                <div className="page-title">{clubInEdition ? clubName : 'Studenckie Koła Naukowe Wydziału Zarządzania'}</div>
                <div className="page-subtitle">{clubInEdition ? 'Formularz edycji' : 'Formularz rejestracji'}</div>
                <Form.Provider
                    onFormChange={(name, {values, forms}) => {
                        if (validationInProgress) {
                            onFormFinish(name, {values, forms});
                            setValidationInProgress(false);
                        }
                    }}
                >

                    <Form
                        name="basic"
                        autoComplete="off"
                        form={form}
                    >
                        <Space direction="vertical" size={16}>
                            <ScienceClubAdminSection logged={logged}/>
                            <ScienceClubDataSection {...{
                                members,
                                setMembers,
                                setMessage,
                                logo,
                                setLogo,
                                getBase64,
                                urlProtocol,
                                setClubName,
                                membersError,
                                validateMembers,
                            }}/>
                            <ScienceClubPartonSection {...{patrons, setPatrons, patronsError, validatePatrons}}/>
                            <ScienceClubFinancialSection
                                planProps={getFilesProps(planList, setPlanList, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 1)}
                                statementsProps={getFilesProps(statementsList, setStatementsList, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 1)}
                            />
                            <ScienceClubAchievementsSection {
                                                                ...{
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
                                                                    documentsProps: getFilesProps(documentsList, setDocumentsList),
                                                                    photosProps: getFilesProps(photosList, setPhotosList),
                                                                }
                                                            }/>
                        </Space>

                        <div className="formFooter">
                            <div>
                                <Form.Item name="correctConfirmation" valuePropName="checked"
                                           rules={[
                                               {
                                                   validator: async (_, checked) => {
                                                       if (!checked) {
                                                           return Promise.reject(
                                                               new Error("Pole wymagane"),
                                                           );
                                                       }
                                                   },
                                               },

                                           ]}
                                >
                                    <Checkbox className="formFooterCheck">
                                        <span className="required-sign">*</span>Potwierdzam, że wszystkie powyższe
                                        informacje o rejestrowanym kole naukowym są
                                        aktualne i poprawne.
                                    </Checkbox>
                                </Form.Item>
                                {activeContest &&
                                    <Form.Item name="contestAgree" valuePropName="checked">
                                        <Checkbox className="formFooterCheck" style={{marginTop: 10}}>
                                            Jako administrator rejestrowanego koła naukowego
                                            {clubName.length ? ' o nazwie ' : ''}
                                            <span>{clubName}</span> zgłaszam chęć
                                            uczestnictwa w konkursie na "Najlepsze Studenckie Koło Naukowe Wydziału
                                            Zarządzania AGH" w edycji
                                            {' ' + activeContest.year + ' '}
                                            i <a
                                            href={`/assets/statute/${activeContest.year}/regulamin-konkursu-SKNWZ-${activeContest.year}.pdf`}
                                            target="balnk">akceptuję regulamin konkursu</a>.
                                        </Checkbox>
                                    </Form.Item>
                                }
                            </div>
                            <Button
                                type="primary"
                                htmlType="submit"
                                onClick={() => setValidationInProgress(true)}>
                                {clubInEdition ? 'Zapisz dane' : 'Zarejestruj koło naukowe'}
                            </Button>
                        </div>
                    </Form>
                </Form.Provider>
            </div>
        );
}

export default Registration;