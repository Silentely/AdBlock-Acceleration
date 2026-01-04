/* jshint esversion: 6 */
/**
 * AdBlock-Acceleration Rule Index Application
 * @description Manages the display and interaction of AdBlock rule lists with multiple mirror sources
 */

// Configuration
const CONFIG = {
  owner: 'Silentely',
  repo: 'AdBlock-Acceleration',
  manifestUrl: './manifest.json',
  searchDebounceMs: 300,
  toastDurationMs: 1400,
  storageKeys: {
    theme: 'theme',
    mirror: 'mirror'
  },
  defaults: {
    theme: 'dark',
    mirror: 'cosr'
  }
};

// Mirror URL builders
const mirrors = {
  ghucs: (f) => `https://raw.githubusercontents.com/${CONFIG.owner}/${CONFIG.repo}/main/${encodeURIComponent(f)}`,
  jsdelivr: (f) => `https://cdn.jsdelivr.net/gh/${CONFIG.owner}/${CONFIG.repo}/${encodeURIComponent(f)}`,
  cosr: (f) => `https://raw.cosr.eu.org/${encodeURIComponent(f)}`,
  gitmirror: (f) => `https://raw.gitmirror.com/${CONFIG.owner}/${CONFIG.repo}/main/${encodeURIComponent(f)}`,
};

// Rule definitions
const rules = [
  { name: 'AdGuard DNS Filter', file: 'AdGuard_Simplified_Domain_Names_Filter.txt', original: 'https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt' },
  { name: 'Anti-AD', file: 'Anti_AD_Easylist.txt', original: 'https://anti-ad.net/easylist.txt' },
  { name: 'EasyList China', file: 'EasyList_China.txt', original: 'https://easylist-downloads.adblockplus.org/easylistchina.txt' },
  { name: 'EasyPrivacy', file: 'EasyPrivacy.txt', original: 'https://easylist.to/easylist/easyprivacy.txt' },
  { name: '屏蔽网站的Cookies警告(I Don\'t Care About Cookies)', file: 'I_dont_care_about_cookies.txt', original: 'https://www.i-dont-care-about-cookies.eu/abp' },
  { name: 'HalfLife', file: 'HalfLife.txt', original: 'https://raw.githubusercontent.com/o0HalfLife0o/list/main/ad.txt' },
  { name: 'CJX\'s Annoyance List', file: 'CJX\'s_Annoyance_List.txt', original: 'https://raw.githubusercontent.com/cjx82630/cjxlist/master/cjx-annoyance.txt' },
  { name: '乘风通用广告过滤规则(Chengfeng General Rules)', file: 'Xinggsf_rule.txt', original: 'https://raw.githubusercontent.com/xinggsf/Adblock-Plus-Rule/master/rule.txt' },
  { name: '乘风视频广告过滤规则(Chengfeng Video Rules)', file: 'Xinggsf_mv.txt', original: 'https://raw.githubusercontent.com/xinggsf/Adblock-Plus-Rule/master/mv.txt' },
  { name: '禁止社交媒体图标列表(Fanboy\'s Social)', file: 'Fanboy-social.txt', original: 'https://easylist-downloads.adblockplus.org/fanboy-social.txt' },
  { name: 'ADgk', file: 'ADgk.txt', original: 'https://raw.githubusercontent.com/banbendalao/ADgk/master/ADgk.txt' },
  { name: '大圣净化(Great Sage Purification)', file: 'ds_hosts.txt', original: 'https://raw.githubusercontent.com/jdlingyu/ad-wars/main/hosts' },
  { name: '1024 hosts', file: '1024_hosts.txt', original: 'https://raw.githubusercontent.com/Goooler/1024_hosts/main/hosts' },
  { name: 'iOSAdblockList', file: 'iPv4_hosts.txt', original: 'https://raw.githubusercontent.com/BlackJack8/iOSAdblockList/main/Hosts.txt' },
  { name: 'StevenBlack', file: 'Steven_hosts', original: 'https://raw.githubusercontent.com/StevenBlack/hosts/main/hosts' },
  { name: 'Hblock', file: 'Hblock_hosts', original: 'https://hblock.molinero.dev/hosts' },
  { name: 'Malware Domain List', file: 'Malware_host.txt', original: 'https://www.malwaredomainlist.com/hostslist/hosts.txt' },
  { name: 'Adblock Warning Removal List', file: 'antiadblockfilters.txt', original: 'https://easylist-downloads.adblockplus.org/antiadblockfilters.txt' },
  { name: 'Fanboy\'s Annoyances', file: 'fanboy-annoyance.txt', original: 'https://easylist-downloads.adblockplus.org/fanboy-annoyance.txt' }
];

// DOM element references
const $ = (selector) => document.querySelector(selector);
const elements = {
  tbody: null,
  mirrorSel: null,
  themeSel: null,
  search: null,
  toast: null,
  updated: null
};

// State
let manifest = null;
let searchDebounceTimer = null;

/**
 * Formats bytes to human-readable string
 * @param {number} n - Number of bytes
 * @returns {string} Formatted size string
 */
function humanBytes(n) {
  if (!Number.isFinite(n)) return '-';
  const units = ['B', 'KB', 'MB', 'GB'];
  let i = 0;
  while (n >= 1024 && i < units.length - 1) {
    n /= 1024;
    i++;
  }
  return n.toFixed(i ? 1 : 0) + ' ' + units[i];
}

/**
 * Formats Date object to YYYY-MM-DD HH:MM:SS
 * @param {Date} dt - Date object
 * @returns {string} Formatted date string
 */
function formatDate(dt) {
  const pad = (n) => String(n).padStart(2, '0');
  const y = dt.getFullYear();
  const m = pad(dt.getMonth() + 1);
  const d = pad(dt.getDate());
  const H = pad(dt.getHours());
  const M = pad(dt.getMinutes());
  const S = pad(dt.getSeconds());
  return `${y}-${m}-${d}  ${H}:${M}:${S}`;
}

/**
 * Shows toast notification
 * @param {string} msg - Message to display
 */
function showToast(msg) {
  elements.toast.textContent = msg;
  elements.toast.classList.add('show');
  setTimeout(() => elements.toast.classList.remove('show'), CONFIG.toastDurationMs);
}

/**
 * Builds URL for file using current mirror
 * @param {string} file - Filename
 * @returns {string} Full URL
 */
function buildUrl(file) {
  const mirror = elements.mirrorSel.value;
  return mirrors[mirror](file);
}

/**
 * Generates HTML for a table row
 * @param {Object} rule - Rule object
 * @returns {string} HTML string
 */
function rowHTML(rule) {
  const file = rule.file;
  const meta = manifest?.files?.find(x => x.file === file);
  const size = meta ? humanBytes(meta.bytes) : '-';
  const time = meta ? formatDate(new Date(meta.mtime)) : '-';
  const link = buildUrl(file);

  console.log('Generating row for:', rule.name, 'with file:', file, 'meta:', meta);

  return `
    <tr data-name="${rule.name.toLowerCase()}" data-file="${file.toLowerCase()}" class="animate-fade-in">
      <td><strong class="text-slate-900 dark:text-white">${rule.name}</strong><div class="text-xs text-slate-500 dark:text-slate-400 mt-1">${file}</div></td>
      <td class="text-right"><div class="text-slate-900 dark:text-slate-200">${size}</div><div class="text-xs text-slate-500 mt-1">${time}</div></td>
      <td><a href="${rule.original}" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">原始</a></td>
      <td><a href="${link}" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">打开当前镜像</a></td>
      <td><button class="btn-secondary text-xs px-3 py-1.5" data-copy="${file}">复制</button></td>
    </tr>`;
}

/**
 * Renders all rules to the table
 */
function render() {
  console.log('Rendering rules...');
  elements.tbody.innerHTML = rules.map(rowHTML).join('');
  attachHandlers(); // Re-attach handlers after rendering
}

/**
 * Filters table rows based on search query (debounced)
 */
function filterDebounced() {
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    const query = elements.search.value.trim().toLowerCase();
    elements.tbody.querySelectorAll('tr').forEach(tr => {
      if (!query) {
        tr.style.display = '';
        return;
      }
      const name = tr.dataset.name;
      const file = tr.dataset.file;
      const matches = name.includes(query) || file.includes(query);
      tr.style.display = matches ? '' : 'none';
    });
  }, CONFIG.searchDebounceMs);
}

/**
 * Attaches event handlers to copy buttons
 */
function attachHandlers() {
  elements.tbody.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const file = btn.dataset.copy;
      const url = buildUrl(file);
      try {
        await navigator.clipboard.writeText(url);
        showToast('已复制到剪贴板');
      } catch (error) {
        console.error('Failed to copy:', error);
        showToast('复制失败');
      }
    });
  });
}

/**
 * Initializes theme system with Tailwind CSS dark mode
 */
function initTheme() {
  const savedTheme = localStorage.getItem(CONFIG.storageKeys.theme) || CONFIG.defaults.theme;

  // Apply theme using Tailwind's class-based dark mode
  function applyTheme(theme) {
    const html = document.documentElement;
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      html.classList.toggle('dark', prefersDark);
    } else {
      html.classList.toggle('dark', theme === 'dark');
    }
  }

  // Apply initial theme
  applyTheme(savedTheme);
  elements.themeSel.value = savedTheme;

  // Listen for theme changes
  elements.themeSel.addEventListener('change', () => {
    const theme = elements.themeSel.value;
    applyTheme(theme);
    try {
      localStorage.setItem(CONFIG.storageKeys.theme, theme);
    } catch (error) {
      console.warn('Failed to save theme preference:', error);
    }
  });

  // Listen for system theme changes when in 'system' mode
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (elements.themeSel.value === 'system') {
      applyTheme('system');
    }
  });
}

/**
 * Initializes mirror selection
 */
function initMirror() {
  try {
    const savedMirror = localStorage.getItem(CONFIG.storageKeys.mirror) || CONFIG.defaults.mirror;
    elements.mirrorSel.value = savedMirror;
  } catch (error) {
    elements.mirrorSel.value = CONFIG.defaults.mirror;
  }
  
  elements.mirrorSel.addEventListener('change', () => {
    try {
      localStorage.setItem(CONFIG.storageKeys.mirror, elements.mirrorSel.value);
    } catch (error) {
      console.warn('Failed to save mirror preference:', error);
    }
    render();
    filterDebounced();
    attachHandlers();
  });
}

/**
 * Loads manifest data
 * @returns {Promise<void>}
 */
async function loadManifest() {
  try {
    const response = await fetch(CONFIG.manifestUrl, { cache: 'no-store' });
    if (response.ok) {
      manifest = await response.json();
      console.log('Manifest loaded successfully:', manifest);
      elements.updated.textContent = '更新: ' + formatDate(new Date(manifest.updatedAt));
    } else {
      throw new Error('Manifest not available');
    }
  } catch (error) {
    console.error('Failed to load manifest:', error);
    elements.updated.textContent = 'manifest 不可用';
  }
}

/**
 * Handles URL query parameters for copy functionality
 */
async function handleQueryParams() {
  const params = new URLSearchParams(location.search);
  const file = params.get('copy');
  const mirror = params.get('mirror');
  
  if (mirror && mirrors[mirror]) {
    elements.mirrorSel.value = mirror;
    render();
    attachHandlers();
    filterDebounced();
  }
  
  if (file) {
    const url = buildUrl(file);
    try {
      await navigator.clipboard.writeText(url);
      showToast('已复制: ' + file);
    } catch (error) {
      console.error('Failed to copy from URL param:', error);
    }
  }
}

/**
 * Main initialization function
 */
async function init() {
  // Cache DOM references
  elements.tbody = $('#rules tbody');
  elements.mirrorSel = $('#mirror');
  elements.themeSel = $('#theme');
  elements.search = $('#search');
  elements.toast = $('#toast');
  elements.updated = $('#updated');
  
  // Initialize components
  initTheme();
  initMirror();
  
  // Load data and render
  await loadManifest();
  console.log('Manifest loaded, rendering rules...');
  render();
  filterDebounced();
  
  // Set up event listeners
  elements.search.addEventListener('input', filterDebounced);
  
  $('#copyAll').addEventListener('click', async () => {
    const visibleRows = Array.from(elements.tbody.querySelectorAll('tr'))
      .filter(tr => tr.style.display !== 'none');
    
    if (visibleRows.length === 0) {
      showToast('无可见项');
      return;
    }
    
    const urls = visibleRows.map(tr => 
      buildUrl(tr.querySelector('[data-copy]').dataset.copy)
    );
    
    try {
      await navigator.clipboard.writeText(urls.join('\n'));
      showToast(`已复制 ${urls.length} 条链接`);
    } catch (error) {
      console.error('Failed to copy all:', error);
      showToast('复制失败');
    }
  });
  
  // Handle query parameters
  await handleQueryParams();
}

// Start the application
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
