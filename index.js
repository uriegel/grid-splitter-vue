import SplitterGrid from "./SplitterGrid.vue"

export function install(Vue) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    if (install.installed) 
        return;
	install.installed = true;    
    Vue.component("splitter-grid", SplitterGrid)
}

const plugin = {
	install,
}

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') 
	GlobalVue = window.Vue;
else if (typeof global !== 'undefined') 
	GlobalVue = global.Vue;

if (GlobalVue) 
	GlobalVue.use(plugin);

// To allow use as module (npm/webpack/etc.) export component
export default SplitterGrid;