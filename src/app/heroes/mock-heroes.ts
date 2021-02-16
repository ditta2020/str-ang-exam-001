import {Hero} from '../model/hero';

const color : { [key: string]: any } = {
    red: null,
    green: null,
    blue: null
};

export const HEROES: Hero[] = [
    {
        id: 1,
        name: "Batman 1",
        address: "NYC",
        superPower: "flying"
    },
    {
        id: 2,
        name: "Batman 2",
        address: "Budapest",
        superPower: "driving"
    },
    {
        id: 3,
        name: "Batman 3",
        address: "Moscow",
        superPower: "crying"
    },
    {
        id: 4,
        name: "Batman 4",
        address: "Paris",
        superPower: "dancing"
    },
    {
        id: 5,
        name: "Batman 5",
        address: "Tokyo",
        superPower: "fighting"
    }
];