import { Attendee } from "./attendeeModel";

export interface Table{
    organization: string;
    seatCount: number;
    seats: string[]; //change to type Attendee[]
    tableid: number;
}

const tables: Table[] = [

    {organization: 'Tech Innovators Group', seatCount: 6, seats: ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'], tableid: 1},

    {organization: 'Green Energy Solutions', seatCount: 4, seats: ['Grace', 'Henry', 'Ivy', 'Jack'], tableid: 2},

    {organization: 'Creative Minds Agency', seatCount: 5, seats: ['Kate', 'Liam', 'Mia', 'Noah', 'Olivia'], tableid: 3},

    {organization: 'Health and Wellness Network', seatCount: 7, seats: ['Sophia', 'William', 'Emma', 'James', 'Ava', 'Logan', 'Chloe'], tableid: 4},

    {organization: 'Tech Titans Inc.', seatCount: 3, seats: ['Mason', 'Amelia', 'Lucas'], tableid: 5},

    {organization: 'Artisan Crafts Collective', seatCount: 6, seats: ['Ella', 'Benjamin', 'Avery', 'Harper', 'Jackson', 'Scarlett'], tableid: 6},

    {organization: 'Finance Wizards Association', seatCount: 4, seats: ['Aiden', 'Elizabeth', 'Jacob', 'Emily'], tableid: 7},

    {organization: 'Environmental Advocates League', seatCount: 8, seats: ['Michael', 'Sofia', 'Logan', 'Madison', 'Daniel', 'Avery', 'William', 'Evelyn'], tableid: 8},

    {organization: 'Innovative Solutions Group', seatCount: 5, seats: ['Ethan', 'Grace', 'Oliver', 'Aria', 'Liam'], tableid: 9},

    {organization: 'Digital Innovators Alliance', seatCount: 7, seats: ['Mia', 'Noah', 'Ava', 'Logan', 'Sophia', 'James', 'Isabella'], tableid: 10},

    {organization: 'Adventure Seekers Club', seatCount: 6, seats: ['Alexander', 'Mila', 'Elijah', 'Charlotte', 'Ethan', 'Emma'], tableid: 11},

    {organization: 'Artisanal Cuisine Society', seatCount: 3, seats: ['William', 'Olivia', 'Elijah'], tableid: 12},

    {organization: 'Green Living Coalition', seatCount: 5, seats: ['Ava', 'Noah', 'Emma', 'Liam', 'Sophia'], tableid: 13},

    {organization: 'Tech Entrepreneurs Alliance', seatCount: 7, seats: ['James', 'Isabella', 'Logan', 'Mia', 'Oliver', 'Sophia', 'William'], tableid: 14},

    {organization: 'Healthy Living Collective', seatCount: 4, seats: ['Liam', 'Ella', 'Ethan', 'Ava'], tableid: 15}
]

export {tables};