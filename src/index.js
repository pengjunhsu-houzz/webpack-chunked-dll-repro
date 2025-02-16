window.loadLibAsyncly = async function () {
    const { default: hello } = await import('./lib');
    hello();
}
