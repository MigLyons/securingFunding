
export interface Item {
    description: string;
    name: string;
    value: number;
    winningBid: number;
}

const items: Item[] = [
    {description: "DeWalt cordless drill, includes 2 batteries and charger", name: "cordless drill", value: 180.00, winningBid: 1003},
    {description: "Ryobi electric leaf blower, lightweight and easy to use", name: "leaf blower", value: 120.00, winningBid: 1005},
    {description: "Bosch hammer drill, powerful and durable for heavy-duty tasks", name: "hammer drill", value: 220.00, winningBid: 1007},
    {description: "Black & Decker jigsaw, variable speed control, includes blades", name: "jigsaw", value: 95.00, winningBid: 1001},
    {description: "Milwaukee circular saw, corded, with laser guide for precision cutting", name: "circular saw", value: 150.00, winningBid: 1002},
    {description: "Makita impact driver, compact design, ideal for tight spaces", name: "impact driver", value: 130.00, winningBid: 1009},
    {description: "Craftsman angle grinder, variable speed, includes grinding discs", name: "angle grinder", value: 110.00, winningBid: 1004},
    {description: "Hitachi reciprocating saw, powerful motor for fast cutting", name: "reciprocating saw", value: 175.00, winningBid: 1006},
    {description: "Stanley tape measure, 25 feet, durable casing with easy-to-read markings", name: "tape measure", value: 20.00, winningBid: 1008},
    {description: "Dremel rotary tool kit, includes various attachments for versatile use", name: "rotary tool", value: 70.00, winningBid: 1000},
    {description: "Worx electric chainsaw, auto-tension system, includes chain oil", name: "electric chainsaw", value: 140.00, winningBid: 1003},
    {description: "Porter-Cable nail gun, pneumatic, suitable for framing and finishing", name: "nail gun", value: 200.00, winningBid: 1005},
    {description: "Husqvarna hedge trimmer, gas-powered, 24-inch blade length", name: "hedge trimmer", value: 180.00, winningBid: 1007},
    {description: "Kobalt air compressor, portable, max pressure of 150 PSI", name: "air compressor", value: 250.00, winningBid: 1002},
    {description: "RIDGID wet/dry vacuum, 6-gallon capacity, includes various nozzles", name: "wet/dry vacuum", value: 120.00, winningBid: 1008}
];

export { items }