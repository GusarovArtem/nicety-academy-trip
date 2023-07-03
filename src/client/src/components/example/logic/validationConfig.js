export const requiredRules = [
    {
    required: true,
    message: 'Pole wymagane',
},
    {
        pattern: new RegExp(/\S+/),
        message: "Pole wymagane"
    }
];

export const passwordRules = [
    {
        required: true,
        message: 'Proszę wpisać hasło',
    },
    {
        min: 8,
        message: 'Hasło powinno składać się z minimum 8 znaków',
    },
    {
        pattern: new RegExp(/(?=.*?[A-Z])/),
        message: "Hasło powinno zawierać wielką literę"
    },
    {
        pattern: new RegExp(/(?=.*?[a-z])/),
        message: "Hasło powinno zawierać małą literę"
    },
    {
        pattern: new RegExp(/(?=.*?[0-9])/),
        message: "Hasło powinno zawierać cyfrę"
    },
    {
        pattern: new RegExp(/(?=.*?[#?!@$%^&*-])/),
        message: "Hasło powinno zawierać znak specjalny"
    },
];

export const aghEmailRules = [
    {
        required: true,
        message: 'Proszę wpisać email',
    },
    {
        type: 'email',
        message: 'Proszę wpisać poprawny adres email',
    },
     ...window.location.hostname.includes('agh.edu.pl')
         ? [{
             pattern: new RegExp(/@(student.)?agh.edu.pl\s*$/),
             message: "Proszę wpisać email w domenie agh.edu.pl"
         }]
         : []
];
export const emailRules = [
    {
        required: true,
        message: 'Proszę wpisać email',
    },
    {
        type: 'email',
        message: 'Proszę wpisać poprawny adres email',
    },
];

export const getLengthRules = length => ([{max: length, message: `Pole może zawierać maksymalnie ${length} znaków`}]);
