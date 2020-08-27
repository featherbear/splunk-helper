const modules = [

];

/* Load all the modules */
// returns a {name: module, ...} map
define(modules.map(module => `./lib/${module}.js`), function () {
    return modules.reduce((obj, key, idx) => ({ ...obj, [key]: arguments[idx] }), {})
})