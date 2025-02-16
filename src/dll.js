/** This is forcing the vendor bundle to contain jsonp chunk loading callbacks */
import './forced-async/promised-count-to-ten';

/**
 * This module will not be initialized on page load, only after loading a separate chunk (lib.js) that also defines a dll-reference to it
 *  which would have overridden the module init code in this DLL bundle.
 */
import './dll-lib';
