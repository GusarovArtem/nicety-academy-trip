import {emailRules, getLengthRules, requiredRules} from "../../logic/validationConfig";

export const publicationsConfig = {
    'name': {title: 'Tytuł', rules: [...requiredRules, ...getLengthRules(255)]},
    'authors': {title: 'Autorzy', rules: [...requiredRules, ...getLengthRules(255)]},
    'date': {title: 'Data wydania (dd-mm-rrrr)', rules: requiredRules, type: 'date'},
    'magazinTitle': {title: 'Tytuł czasopisma / nazwa monografii', rules: requiredRules}
};

export const membersConfig = {
    'name': {title: 'Imię', rules: [...requiredRules, ...getLengthRules(100)]},
    'surname': {title: 'Nazwisko', rules: [...requiredRules, ...getLengthRules(100)]},
    'email': {title: 'Email', requiredException: 'Członek KN', rules: [...emailRules,...getLengthRules(100)]},
    'yearOfStudy': {title: 'Rok studiów', type: 'number', options: [1, 5], rules: []},
    'department': {
        title: 'Wydział',
        rules: getLengthRules(255),
        type: 'select',
        options: [
            {label: 'Wydział Inżynierii Lądowej i Gospodarki Zasobami', value: 'WILiGZ'},
            {label: 'Wydział Inżynierii Metali i Informatyki Przemysłowej', value: 'WIMiIP'},
            {label: 'Wydział Elektrotechniki, Automatyki, Informatyki i Inżynierii Biomedycznej', value: 'WEAIiIB'},
            {label: 'Wydział Inżynierii Mechanicznej i Robotyki', value: 'WIMiR'},
            {label: 'Wydział Geologii, Geofizyki i Ochrony Środowiska', value: 'WGGiOS'},
            {label: 'Wydział Geodezji Górniczej i Inżynierii Środowiska', value: 'WGGiIS'},
            {label: 'Wydział Inżynierii Materiałowej i Ceramiki', value: 'WIMiC'},
            {label: 'Wydział Odlewnictwa', value: 'WO'},
            {label: 'Wydział Metali Nieżelaznych', value: 'WMN'},
            {label: 'Wydział Wiertnictwa, Nafty i Gazu', value: 'WWNiG'},
            {label: 'Wydział Zarządzania', value: 'WZ'},
            {label: 'Wydział Energetyki i Paliw', value: 'WEiP'},
            {label: 'Wydział Fizyki i Informatyki Stosowanej', value: 'WFiIS'},
            {label: 'Wydział Matematyki Stosowanej', value: 'WMS'},
            {label: 'Wydział Humanistyczny', value: 'WH'},
        ]
    },
    'fieldOfStudy': {
        title: 'Kierunek',
        rules: getLengthRules(255),
        type: 'select',
        options: [
            {label: 'Zarządzania', value: 'Z', dependency: {value: 'WZ', cell: 'department'}},
            {label: 'Zarządzania i Inżynierii Produkcji', value: 'ZiIP', dependency: {value: 'WZ', cell: 'department'}},
            {label: 'Informatyki i Ekonometrii', value: 'IiE', dependency: {value: 'WZ', cell: 'department'}},
        ]
    },
    'function': {
        title: 'Funkcja',
        rules: [...requiredRules, ...getLengthRules(100)],
        type: 'select',
        options: [
            {label: 'Prezes', value: 'Prezes'},
            {label: 'Wiceprezes', value: 'Wiceprezes'},
            {label: 'Sekretarz', value: 'Sekretarz'},
            {label: 'Skarbnik', value: 'Skarbnik'},
            {label: 'Członek KN', value: 'Członek KN'}]
    }
};

export const defaultMembers = [
    {'key': 0, 'function': 'Prezes'},
    {'key': 1, 'function': 'Sekretarz'},
    {'key': 2, 'function': 'Skarbnik'}
];

export const patronsConfig = {
    'name': {title: 'Imię', rules: [...requiredRules, ...getLengthRules(100)]},
    'surname': {title: 'Nazwisko', rules: [...requiredRules, ...getLengthRules(100)]},
    'email': {title: 'Email', rules: [...emailRules, ...getLengthRules(100)]},
};

export const defaultPatrons = [
    {'key': 0, 'name': '', 'surname': '', 'phone': ''}
]

export const defaultConfig = {
    'name': {title: 'Tytuł zrealizowanego zadania', rules: [...requiredRules, ...getLengthRules(255)]},
    'place': {title: 'Miejsce (instytucja / uczelnia / miasto)', rules: [...requiredRules, ...getLengthRules(255)]},
    'date': {title: 'Termin (dd-mm-rrrr)', rules: requiredRules, type: 'date'},
    'description': {title: 'Opis', rules: requiredRules, headerTooltip: 'Proszę wskazać czy koło naukowe było organizatorem / współorganizatorem / uczestnikiem wydarzenia oraz ilu członków koła uczestniczyło w wydarzeniu.'}
};