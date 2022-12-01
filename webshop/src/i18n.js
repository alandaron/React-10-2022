import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import eng from "./i18n/eng.json";
import est from "./i18n/est.json";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
	eng: eng,
	est: est,
	tur: {
		translation: {
			admin: "Yönetici görünümüne",
			shops: "Bizim dükkanlar",
			cart: "Araba",
			add_to_cart: "Sepete ekle",
			remove_from_cart: "Sepetten kaldır",
			empty_cart: "Boş sepet",
			cart_empty: "Kart boş",
			total_products: "Toplam ürünler",
			total_price: "Toplam fiyat",
		},
	},
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: localStorage.getItem("language") || "est", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
		// you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
		// if you're using a language detector, do not define the lng option

		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
