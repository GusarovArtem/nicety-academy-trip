import {useState} from "react";
import {Pagination} from "antd";

const mockNews = [
    {
        title: 'Wycieczka turystyczna 1',
        date: '21-09-2022'
    },
    {
        title: 'Rekrutacja na szkolenie z programu Ansys Mechanical i Ansys CFD dla kadry dydaktycznej (Power 2) 2',
        date: '20-09-2022',
        image: 'https://www.agh.edu.pl/home/__processed__/8/1/csm_targi_pracy_dreamstime_0485546ed7.webp'
    },
    {
        title: 'Bilety na koncert Kuby Banacha z okazji inauguracji roku akademickiego 3',
        date: '19-09-2022'
    },
    {
        title: 'Wycieczka turystyczna 4',
        date: '16-09-2022'
    },
    {
        title: 'Wycieczka turystyczna 5',
        date: '16-09-2022'
    },
    {
        title: 'Wycieczka turystyczna 6',
        date: '16-09-2022'
    },
]

const mockAnnouncements = [
    {
        title: 'Międzynarodowa konferencja Naukowa "Kryminalistyka Jutra 1"',
        date: '21 września'
    },
    {
        title: 'Międzynarodowa konferencja Naukowa "Kryminalistyka Jutra 2"',
        date: '21 września',
    },
    {
        title: 'Międzynarodowa konferencja Naukowa "Kryminalistyka Jutra 3"',
        date: '21 września'
    },
    {
        title: 'Międzynarodowa konferencja Naukowa "Kryminalistyka Jutra 4"',
        date: '21 września'
    },
    {
        title: 'Międzynarodowa konferencja Naukowa "Kryminalistyka Jutra 5"',
        date: '21 września'
    },
    {
        title: 'Międzynarodowa konferencja Naukowa "Kryminalistyka Jutra 6"',
        date: '21 września'
    },
]

const Home = () => {
    const numEachPage = 5;
    const [minNews, setMinNews] = useState(0);
    const [maxNews, setMaxNews] = useState(numEachPage);
    const [minAnnouncements, setMinAnnouncements] = useState(0);
    const [maxAnnouncements, setMaxAnnouncements] = useState(numEachPage);
    const [news, setNews] = useState(mockNews);
    const [announcements, setAnnouncements] = useState(mockAnnouncements);

    const handleNewsChange = value => {
        setMinNews((value - 1) * numEachPage)
        setMaxNews(value * numEachPage)
    };
    const handleAnnouncementChange = value => {
        setMinAnnouncements((value - 1) * numEachPage)
        setMaxAnnouncements(value * numEachPage)
    };

    const getNews = (news) => {
        return news.slice(minNews, maxNews).map((n, index) => (
            <div  key={index} className="news-item">
                <div>
                    <div className="section-title">{n.title}</div>
                    <div className="news-date">{n.date}</div>
                </div>
                <img src={n.image} className="news-img"/>
            </div>
        ))
    }
    const getAnnouncements = (announcements) => {
        return announcements.slice(minAnnouncements, maxAnnouncements).map((a, index) => (
            <div key={index} className="announcement-item">
                <div>{a.date}</div>
                <div className="section-title">{a.title}</div>
            </div>
        ))
    }

    return (
        <div className="Home page-container">
            <div className="page-wrapper">
                <div className="page-col">
                    <div className="page-title">Aktualności</div>
                    <div className="news-box">
                        {getNews(news)}
                    </div>
                    <Pagination
                        defaultCurrent={1}
                        defaultPageSize={numEachPage}
                        onChange={handleNewsChange}
                        total={news.length}
                        className="home-pagination"
                    />
                </div>
                <div className="page-col">
                    <div className="page-title">Ogłoszenia</div>
                    <div className="announcement-box">
                        {getAnnouncements(announcements)}
                    </div>
                    <Pagination
                        defaultCurrent={1}
                        defaultPageSize={numEachPage}
                        onChange={handleAnnouncementChange}
                        total={news.length}
                        className="home-pagination"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
