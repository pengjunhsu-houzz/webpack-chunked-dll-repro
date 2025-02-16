In this reproduction, both vendor (DLL) and main entrypoint have JSONP chunk loading code.

When a module (in this case `dll-lib.js`) is included in vendor but not used until a later time, the module is not instantiated.

Later when I clicked the button on the page, lib.js is loaded asyncly, it also broadcasts its copy of `dll-lib.js`, which is just a reference, via JSONP and replaces the actual copy (with implementation) in the DLL.

The console log shows the point when it happens; and you can see that within dll bundle, it attempts to load dll (unresolved circular reference)

<img width="1029" alt="image" src="https://github.com/user-attachments/assets/9112c126-6770-4899-b91d-cfb24d3553e4" />
