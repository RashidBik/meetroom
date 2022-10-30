import { writable } from "svelte/store"

export const people = writable(
    [
        {
            id: 1,
            username: 'ali123',
            name: 'Eliza',
            bio: 'Hey Dear Lets Talk To Each Other',
            profile_pic: 'src/lib/images/Girl.jpg',
            favourite: true
        }
    ]
);
