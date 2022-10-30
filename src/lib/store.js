import { writable } from "svelte/store"

export const people = writable(
    [
        {
            id: 4,
            username: 'ali123',
            name: 'Ali',
            bio: 'I never give up',
            profile_pic: '',
            favourite: true
        },
        {
            id: 2,
            username: 'Mike44',
            name: 'Mike',
            bio: 'hey i am using meetroom',
            profile_pic: '',
            favourite: false
        },
        {
            id: 3,
            username: 'negarx34',
            name: 'Raha Negar',
            bio: 'my love is my mom',
            profile_pic: '',
            favourite: true
        },
        {
            id: 1,
            username: 'yalda77',
            name: 'Yalda Yagana',
            bio: 'part of the whole',
            profile_pic: '',
            favourite: true
        },
        {
            id: 5,
            username: 'yalda77',
            name: 'Boda Nezami',
            bio: 'Careful about changes',
            profile_pic: '',
            favourite: false
        },
    ]
);
