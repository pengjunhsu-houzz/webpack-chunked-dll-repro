export default async function hello() {
    console.log('hello world from lib');

    /**
     * This would have reference the dll-lib included in dll.js.
     * However... it also calls jsonp callback which overwrites the module init code in DLL leading to a undefined reference.
     */
    import('./dll-lib').then(({ default: dllLib }) => {
        console.log('loaded dll-lib in lib.js');
    });
}
