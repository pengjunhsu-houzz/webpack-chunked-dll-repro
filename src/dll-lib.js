/**
 * This is the bugged library import which is shared by DLL and imported asyncly in lib.js (which overwrites the module init code in DLL)
 */
export default function dllLib() {
    console.log('hello world from dll-lib');
}