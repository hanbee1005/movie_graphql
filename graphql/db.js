export const people = [
    {
        id: 0,
        name: "Nicolas",
        age: 18,
        gender: "female"
    },
    {
        id: 1,
        name: "Alice",
        age: 20,
        gender: "female"
    },
    {
        id: 2,
        name: "Bob",
        age: 30,
        gender: "male"
    },
    {
        id: 3,
        name: "JD",
        age: 18,
        gender: "male"
    },
    {
        id: 4,
        name: "moondaddi",
        age: 25,
        gender: "male"
    },
    {
        id: 5,
        name: "flym",
        age: 36,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}