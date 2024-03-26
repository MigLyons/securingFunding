
export interface Volunteer{
    availability: string;
    bidNumber: number;
    name: string;
    phone: number;
    position: string;
}

const volunteers: Volunteer[] = [
{availability: 'T/Th/Sat 10am-2pm', bidNumber: 1010, name: 'Evelyn Smith', phone: 4065551234, position: 'checkout'},

{availability: 'M/W/F 2pm-6pm', bidNumber: 1011, name: 'Harold Johnson', phone: 4065555678, position: 'checkin'},

{availability: 'T/Th/Sat 10am-2pm', bidNumber: 1012, name: 'Doris Brown', phone: 4065559101, position: 'inventory'},

{availability: 'M/W/F 2pm-6pm', bidNumber: 1013, name: 'Stanley Thompson', phone: 4065552345, position: 'research'},

{availability: 'T/Th/Sat 10am-2pm', bidNumber: 1014, name: 'Betty Davis', phone: 4065556789, position: 'liase with the mean caters'},

{availability: 'M/W/F 2pm-6pm', bidNumber: 1015, name: 'Clarence Wilson', phone: 4065550123, position: 'checkout'},

{availability: 'T/Th/Sat 10am-2pm', bidNumber: 1016, name: 'Gladys Miller', phone: 4065553456, position: 'usher'},

{availability: 'M/W/F 2pm-6pm', bidNumber: 1017, name: 'Bernard Jones', phone: 4065557890, position: 'bouncer'},

{availability: 'T/Th/Sat 10am-2pm', bidNumber: 1018, name: 'Martha Taylor', phone: 4065556781, position: 'cleanup'},

{availability: 'M/W/F 2pm-6pm', bidNumber: 1019, name: 'Leonard Brown', phone: 4065552341, position: 'cleanup'}

];

export {volunteers};