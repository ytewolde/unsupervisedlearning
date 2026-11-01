// Original outline icons, using a consistent 24px grid.
const paths={
 data:'<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 9h1m6 0h1m-8 6h1m6 0h1"/>',
 features:'<path d="M6 3v5m0 4v9M12 3v11m0 4v3M18 3v2m0 4v12M3 8h6m0 6h6m0-9h6"/>',
 train:'<path d="m9 5 11 7-11 7Z"/>',
 explore:'<circle cx="10" cy="10" r="6"/><path d="m15 15 5 5M7 10h6m-3-3v6"/>',
 card:'<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9ZM14 3v6h6M8 13h8m-8 4h5"/>',
 upload:'<path d="M12 16V3m-5 5 5-5 5 5M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/>'
};
export function icon(name){return `<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.data}</svg>`;}
