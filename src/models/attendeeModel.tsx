


 export interface Attendee {
    city: string; 
    state: string;
    street: string;
    zipcode: string;
    organization: string;
    paid: boolean;
    table: number;
    name: string;
    plusOne: boolean;
    wins: any; //a button
    bidNumber: number;
}

const attendees: Attendee[] = [
    {street: '456 Lakeview Drive', state: 'California', city: 'San Francisco', zipcode: '54321', organization: 'Tech Corp', paid: true, table: 8, name: 'Emily Dickinson', plusOne: true, wins: null, bidNumber: 1000},

    {street: '789 Pinecrest Lane', state: 'New York', city: 'New York City', zipcode: '67890', organization: 'Global Solutions', paid: true, table: 3, name: 'John Doe', plusOne: false, wins: null, bidNumber: 1001},

    {street: '101 Cedar Ridge Road', state: 'Texas', city: 'Austin', zipcode: '13579', organization: 'Innovate LLC', paid: true, table: 5, name: 'Jane Smith', plusOne: false, wins: null, bidNumber: 1002},

    {street: '321 Meadowbrook Drive', state: 'Florida', city: 'Miami', zipcode: '97531', organization: 'Tech Innovations', paid: true, table: 10, name: 'Michael Jordan', plusOne: true, wins: null, bidNumber: 1003},

    {street: '654 Hilltop Avenue', state: 'Washington', city: 'Seattle', zipcode: '24680', organization: 'Digital Dynamics', paid: false, table: 2, name: 'Albert Einstein', plusOne: false, wins: null, bidNumber: 1004},

    {street: '987 Sunset Boulevard', state: 'Illinois', city: 'Chicago', zipcode: '80246', organization: 'Data Solutions Inc.', paid: true, table: 7, name: 'Marie Curie', plusOne: false, wins: null, bidNumber: 1005},

    {street: '147 Riverfront Road', state: 'Colorado', city: 'Denver', zipcode: '36982', organization: 'Tech World Enterprises', paid: true, table: 4, name: 'Leonardo da Vinci', plusOne: true, wins: null, bidNumber: 1006},

    {street: '369 Oakwood Drive', state: 'Massachusetts', city: 'Boston', zipcode: '21463', organization: 'Innovative Solutions Group', paid: true, table: 9, name: 'Ada Lovelace', plusOne: false, wins: null, bidNumber: 1007},

    {street: '258 Summit Avenue', state: 'Arizona', city: 'Phoenix', zipcode: '46821', organization: 'FutureTech Inc.', paid: true, table: 1, name: 'Nikola Tesla', plusOne: true, wins: null, bidNumber: 1008},

    {street: '741 Forest Park Lane', state: 'Oregon', city: 'Portland', zipcode: '93572', organization: 'TechGenius Solutions', paid: true, table: 11, name: 'Galileo Galilei', plusOne: false, wins: null, bidNumber: 1009}
];




export { attendees };


//DOn't worry about this, I don't know what I'm doing.
/*class Attendee {
    address: any;
    city: any;
    state: any;
    street: any;
    zipcode: any;
    organization: any;
    paid: any;
    table: any;
    name: any;
    plusOne: any;
    wins: any;
    
    constructor (address: any, city: any, state: any, street: any, zipcode: any, organization: any, paid: any, table: any, name: any, plusOne: any, wins: any) {
        this.address = address;
        this.city = city;
        this.state = state;
        this.street = street;
        this.zipcode = zipcode;
        this.organization = organization;
        this.paid = paid;
        this.table = table;
        this.name = name;
        this.plusOne = plusOne;
        this.wins = wins;
    }

    toString() {
        return this.name + ', ' + this.table;
    }
}

const attendeeConverter = {
    toFirestore: (attendee : Attendee) => {
        return {
            address: attendee.address,
            city: attendee.city,
            state: attendee.state,
            street: attendee.street,
            zipcode: attendee.zipcode,
            organization: attendee.organization,
            paid: attendee.paid,
            table: attendee.table,
            name: attendee.name,
            plusOne: attendee.plusOne,
            wins: attendee.wins
        };
    },
    
    fromFirestore: (snapshot: { data: (arg0: any) => any; }, options: any) => {
        const data = snapshot.data(options);
        return new Attendee(data.address, data.city, data.state, data.street, data.zipcode, data.organization, data.paid, data.table, data.name, data.plusOne, data.wins);
    }
};
*/