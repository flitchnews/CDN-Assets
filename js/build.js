
const adUnits = [
    {
        code: 'block_18519', // Article Top 728x90
        placement_id: 18519,
        sizes: [728, 90]
    },
    {
        code: 'block_18520', // Article Bottom 728x90
        placement_id: 18520,
        sizes: [728, 90]
    }
];

let build = () => {
    console.log('run');
    smartyads.buildUnits(adUnits);
};

window.onload = build;

