/* Appearance is independent of model settings. System preference is the initial default. */
(()=>{
 const key='pattern-lab-theme',root=document.documentElement;
 const system=window.matchMedia?.('(prefers-color-scheme: dark)');
 let preference='system';
 try{const saved=localStorage.getItem(key);if(['light','dark','system'].includes(saved))preference=saved;}catch{}
 function apply(){const mode=preference==='system'?(system?.matches?'dark':'light'):preference;root.dataset.theme=mode;root.style.colorScheme=mode;document.querySelectorAll('[data-theme-choice]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.themeChoice===mode)));}
 apply();system?.addEventListener?.('change',()=>{if(preference==='system')apply();});
 function bind(){apply();document.querySelectorAll('[data-theme-choice]').forEach(b=>b.addEventListener('click',()=>{preference=b.dataset.themeChoice;apply();const status=document.getElementById('theme-status');try{localStorage.setItem(key,preference);status.textContent=`${preference==='dark'?'Dark':'Light'} mode saved`;}catch{status.textContent='Appearance applied for this visit; browser storage is unavailable.';}}));}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind,{once:true});else bind();
})();
