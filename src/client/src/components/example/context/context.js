import {createContext, useEffect, useState} from "react";
import {getClubsList, getContestList, getUserData} from "../../api/api";

const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const [message, setMessage] = useState('');
    const [userClubIds, setUserClubIds] = useState([]);
    const [clubInEdition, setClubInEdition] = useState('');
    const [logged, setLogged] = useState(false);
    const [userName, setUserName] = useState({});
    const [clubList, setClubList] = useState([]);
    const [contests, setContests] = useState([]);

    useEffect(() => {
        getUserData().then(response => {
            setUserClubIds(response.userClubListIds);
            setLogged(true);
            setUserName({adminName: response.userName, adminSurname: response.userSurname});
        }).catch((response) => {
            setUserClubIds([]);
            setLogged(false);
        });

        getClubsList().then(response => setClubList(response))
            .catch((response) => {
            });

        getContestList().then(response => {
            setContests(response.sort((a, b) => parseInt(b.year) - parseInt(a.year)));
        }).catch((response) => {
        });
    }, []);

    const valueToShare = {
        message, setMessage,
        userClubIds, setUserClubIds,
        clubInEdition, setClubInEdition,
        logged, setLogged,
        clubList, setClubList,
        contests, setContests,
        userName, setUserName,
    }

    return <AppContext.Provider value={valueToShare}>
        {children}
    </AppContext.Provider>
}

export {AppContextProvider, AppContext};