export default async function countToTen() {
    await import(/* webpackChunkName: "promisedCountToTen" */
       './count-to-ten.js').then(({ default: countToTen }) => {
        countToTen();
    });
}
