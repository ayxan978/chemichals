/* ================================
   НАСТРОЙКИ
================================ */

const LANG_KEY = 'site_lang';
const DEFAULT_LANG = 'ru';
const LANG_PATH = 'lang'; // папка с ru.json / en.json / kz.json

let LANG_CACHE = {};

/* ================================
   ЗАГРУЗКА ЯЗЫКА
================================ */

async function loadLanguage(lang) {
	try {
		// кеш
		if (!LANG_CACHE[lang]) {
			const res = await fetch(`${LANG_PATH}/${lang}.json`);
			if (!res.ok) throw new Error('Language file not found');
			LANG_CACHE[lang] = await res.json();
		}

		const dict = LANG_CACHE[lang];

		// обычный текст
		document.querySelectorAll('[data-i18n]').forEach(el => {
			applyValue(el, dict, el.dataset.i18n, 'textContent');
		});

		// placeholder
		document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
			applyValue(el, dict, el.dataset.i18nPlaceholder, 'placeholder');
		});

		// value (submit / button)
		document.querySelectorAll('[data-i18n-value]').forEach(el => {
			applyValue(el, dict, el.dataset.i18nValue, 'value');
		});

		// title (необязательно, но полезно)
		document.querySelectorAll('[data-i18n-title]').forEach(el => {
			applyValue(el, dict, el.dataset.i18nTitle, 'title');
		});

		localStorage.setItem(LANG_KEY, lang);
		document.documentElement.setAttribute('lang', lang);

		console.log(typeof loadProducts)
		if (typeof loadProducts === 'function') {
			loadProducts();
		}

		// 3. если это страница товара
		if (typeof reloadProductPage === 'function') {
			reloadProductPage();
		}
	} catch (e) {
		console.error('Ошибка загрузки языка:', e);
	}
}

/* ================================
   ПРИМЕНЕНИЕ ЗНАЧЕНИЯ
================================ */

function applyValue(el, dict, path, prop) {
	if (!path) return;

	const keys = path.split('.');
	let value = dict;

	for (let k of keys) {
		if (value && typeof value === 'object') {
			value = value[k];
		} else {
			value = null;
			break;
		}
	}

	if (value !== undefined && value !== null) {
		el[prop] = value;
	}
}

/* ================================
   ИНИЦИАЛИЗАЦИЯ
================================ */

function initLanguage() {
	const savedLang = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
	loadLanguage(savedLang);
}

/* ================================
   СМЕНА ЯЗЫКА (из HTML)
================================ */

function setLanguage(lang) {
	loadLanguage(lang);
	// 2. если на странице есть товары — перезагружаем их

}

/* ================================
   АВТОСТАРТ
================================ */

document.addEventListener('DOMContentLoaded', initLanguage);

/* ================================
   ДЕЛАЕМ ФУНКЦИЮ ГЛОБАЛЬНОЙ
================================ */

window.setLanguage = setLanguage;
