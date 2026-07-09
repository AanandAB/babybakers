/* ============================================================
   BABY BAKERS — SITE CONTENT (edit here, no code knowledge needed)
   All menu items, prices, categories, stats and locations live in
   this one file. Change text/prices/images here and the whole site
   updates automatically.
   ============================================================ */

const CONFIG = {
  brand: "Baby Bakers",
  tagline: "Tempting Experience",
  sinceYear: 1976,
  region: "Kuthuparamba, Kannur — Kerala",
  // ---- PLACEHOLDERS — replace with Baby Bakers' real numbers before going live ----
  whatsapp: "910000000000",           // digits only, country code first (e.g. 9198XXXXXXXX)
  phoneDisplay: "+91 00000 00000",    // shown on the Call button / footer
  phoneTel: "+910000000000",          // used for the tel: link
  email: "hello@babybakers.in",       // replace with real email
};

/* ---- Scroll-triggered counters (Act 2) ---- */
const STATS = [
  { num: 50,   label: "Years of Baking",  suffix: "" },
  { num: 4,    label: "Bakery Outlets",   suffix: "" },
  { num: 150,  label: "Sweets & Bakes",   suffix: "+" },
  { num: 100,  label: "% Made Fresh Daily", suffix: "" },
];

/* ---- Category shelves (Act 3 horizontal showcase) ---- */
const CATEGORIES = [
  { name: "Laddu & Sweets",  ml: "മധുരപലഹാരങ്ങൾ", img: "assets/images/sweets/ghee-laddu.jpg",     jump: "Sweets"   },
  { name: "Kerala Halwa",    ml: "കറുത്ത ഹൽവ",     img: "assets/images/sweets/kozhikode-halwa.jpg", jump: "Sweets"   },
  { name: "Fresh Cakes",     ml: "കേക്കുകൾ",       img: "assets/images/cakes/chocolate-truffle.jpg", jump: "Cakes"   },
  { name: "Custom Cakes",    ml: "ഓർഡർ കേക്ക്",    img: "assets/images/cakes/birthday.jpg",         jump: "Cakes"    },
  { name: "Savouries",       ml: "എരിവുപലഹാരം",    img: "assets/images/savouries/murukku.jpg",      jump: "Savouries"},
  { name: "Bread & Buns",    ml: "ബ്രെഡ് & ബൺ",    img: "assets/images/bakery/sweet-bun.jpg",       jump: "Bakery"   },
  { name: "Chips & Snacks",  ml: "ഉപ്പേരി & ചിപ്സ്", img: "assets/images/savouries/banana-chips.jpg", jump: "Savouries"},
  { name: "Biscuits",        ml: "ബിസ്ക്കറ്റ്",     img: "assets/images/biscuits/assorted-cookies.jpg", jump: "Biscuits & Toffees"},
  { name: "Toffees",         ml: "മിഠായി",         img: "assets/images/biscuits/milk-toffee.jpg",   jump: "Biscuits & Toffees"},
  { name: "Hot & Fresh Fried", ml: "വടയും ബോണ്ടയും", img: "assets/images/savouries/uzhunnu-vada.jpg", jump: "Savouries"},
];

/* diet: 'veg' = pure vegetarian (green), 'egg' = contains egg (amber, eggless on request) */
const MENU = [
  /* ---------------- SWEETS & TRADITIONAL ---------------- */
  { name: "Ghee Laddu",        ml: "നെയ്യ് ലഡ്ഡു",  cat: "Sweets", price: "₹18 / pc",  diet: "veg", img: "assets/images/sweets/ghee-laddu.jpg",      popular: true  },
  { name: "Boondi Laddu",      ml: "ബൂന്ദി ലഡ്ഡു",  cat: "Sweets", price: "₹15 / pc",  diet: "veg", img: "assets/images/sweets/boondi-laddu.jpg"     },
  { name: "Rava Laddu",        ml: "റവ ലഡ്ഡു",      cat: "Sweets", price: "₹16 / pc",  diet: "veg", img: "assets/images/sweets/rava-laddu.jpg"       },
  { name: "Kozhikodan Halwa",  ml: "കറുത്ത ഹൽവ",    cat: "Sweets", price: "₹280 / kg", diet: "veg", img: "assets/images/sweets/kozhikode-halwa.jpg", popular: true  },
  { name: "Mysore Pak",        ml: "മൈസൂർ പാക്ക്",  cat: "Sweets", price: "₹300 / kg", diet: "veg", img: "assets/images/sweets/mysore-pak.jpg"       },
  { name: "Jangiri",           ml: "ജാൻഗിരി",        cat: "Sweets", price: "₹20 / pc",  diet: "veg", img: "assets/images/sweets/jangiri.jpg"          },
  { name: "Jalebi",            ml: "ജിലേബി",         cat: "Sweets", price: "₹200 / kg", diet: "veg", img: "assets/images/sweets/jalebi.jpg"           },
  { name: "Gulab Jamun",       ml: "ഗുലാബ് ജാമുൻ",  cat: "Sweets", price: "₹14 / pc",  diet: "veg", img: "assets/images/sweets/gulab-jamun.jpg",     popular: true  },
  { name: "Unniyappam",        ml: "ഉണ്ണിയപ്പം",     cat: "Sweets", price: "₹12 / pc",  diet: "veg", img: "assets/images/sweets/unniyappam.jpg"       },
  { name: "Achappam",          ml: "അച്ചപ്പം",       cat: "Sweets", price: "₹220 / kg", diet: "veg", img: "assets/images/sweets/achappam.jpg"         },
  { name: "Kuzhalappam",       ml: "കുഴലപ്പം",       cat: "Sweets", price: "₹240 / kg", diet: "veg", img: "assets/images/sweets/kuzhalappam.jpg"      },
  { name: "Ela Ada",           ml: "ഇലയട",           cat: "Sweets", price: "₹18 / pc",  diet: "veg", img: "assets/images/sweets/ela-ada.jpg"          },
  { name: "Palada Payasam",    ml: "പാലട പായസം",     cat: "Sweets", price: "₹90 / 250ml",diet: "veg", img: "assets/images/sweets/payasam.jpg"          },
  { name: "Milk Peda",         ml: "പേഡ",            cat: "Sweets", price: "₹360 / kg", diet: "veg", img: "assets/images/sweets/peda.jpg"             },
  { name: "Kaju Katli",        ml: "കാജു കത്‌ലി",    cat: "Sweets", price: "₹720 / kg", diet: "veg", img: "assets/images/sweets/kaju-katli.jpg",      popular: true  },
  { name: "Badusha",           ml: "ബാദുഷ",          cat: "Sweets", price: "₹22 / pc",  diet: "veg", img: "assets/images/sweets/badusha.jpg"          },

  /* ---------------- CAKES ---------------- */
  { name: "Chocolate Truffle", ml: "ചോക്ലേറ്റ് കേക്ക്", cat: "Cakes", price: "from ₹550/kg", diet: "egg", img: "assets/images/cakes/chocolate-truffle.jpg", popular: true },
  { name: "Black Forest",      ml: "ബ്ലാക്ക് ഫോറസ്റ്റ്", cat: "Cakes", price: "from ₹520/kg", diet: "egg", img: "assets/images/cakes/black-forest.jpg" },
  { name: "Pineapple Cake",    ml: "പൈനാപ്പിൾ കേക്ക്", cat: "Cakes", price: "from ₹480/kg", diet: "egg", img: "assets/images/cakes/pineapple.jpg" },
  { name: "Butterscotch",      ml: "ബട്ടർസ്കോച്ച്",    cat: "Cakes", price: "from ₹520/kg", diet: "egg", img: "assets/images/cakes/butterscotch.jpg" },
  { name: "Red Velvet",        ml: "റെഡ് വെൽവെറ്റ്",   cat: "Cakes", price: "from ₹620/kg", diet: "egg", img: "assets/images/cakes/red-velvet.jpg" },
  { name: "Kerala Plum Cake",  ml: "പ്ലം കേക്ക്",      cat: "Cakes", price: "₹640 / kg",   diet: "egg", img: "assets/images/cakes/plum-cake.jpg", popular: true },
  { name: "Fresh Cream Pastry",ml: "പേസ്ട്രി",         cat: "Cakes", price: "₹45 / pc",    diet: "egg", img: "assets/images/cakes/pastry.jpg" },
  { name: "Wedding Tier Cake", ml: "വെഡ്ഡിംഗ് കേക്ക്", cat: "Cakes", price: "on enquiry",  diet: "egg", img: "assets/images/cakes/wedding.jpg" },
  { name: "Custom Theme Cake", ml: "തീം കേക്ക്",       cat: "Cakes", price: "on enquiry",  diet: "egg", img: "assets/images/cakes/birthday.jpg", popular: true },

  /* ---------------- SAVOURIES & SNACKS ---------------- */
  { name: "Samosa",            ml: "സമോസ",           cat: "Savouries", price: "₹12 / pc",  diet: "veg", img: "assets/images/savouries/samosa.jpg", popular: true },
  { name: "Vegetable Cutlet",  ml: "കട്ട്‌ലറ്റ്",     cat: "Savouries", price: "₹15 / pc",  diet: "veg", img: "assets/images/savouries/cutlet.jpg" },
  { name: "Veg Puffs",         ml: "പഫ്സ്",          cat: "Savouries", price: "₹18 / pc",  diet: "veg", img: "assets/images/savouries/puffs.jpg", popular: true },
  { name: "Kerala Mixture",    ml: "മിക്സ്ചർ",        cat: "Savouries", price: "₹200 / kg", diet: "veg", img: "assets/images/savouries/mixture.jpg" },
  { name: "Murukku",           ml: "മുറുക്ക്",        cat: "Savouries", price: "₹220 / kg", diet: "veg", img: "assets/images/savouries/murukku.jpg" },
  { name: "Banana Chips",      ml: "ഏത്തയ്ക്ക ഉപ്പേരി", cat: "Savouries", price: "₹260 / kg", diet: "veg", img: "assets/images/savouries/banana-chips.jpg", popular: true },
  { name: "Sharkara Varatti",  ml: "ശർക്കര വരട്ടി",   cat: "Savouries", price: "₹300 / kg", diet: "veg", img: "assets/images/savouries/sharkara-varatti.jpg" },
  { name: "Pazham Pori",       ml: "പഴം പൊരി",        cat: "Savouries", price: "₹14 / pc",  diet: "veg", img: "assets/images/savouries/pazham-pori.jpg" },
  { name: "Uzhunnu Vada",      ml: "ഉഴുന്ന് വട",      cat: "Savouries", price: "₹12 / pc",  diet: "veg", img: "assets/images/savouries/uzhunnu-vada.jpg" },
  { name: "Parippu Vada",      ml: "പരിപ്പ് വട",      cat: "Savouries", price: "₹12 / pc",  diet: "veg", img: "assets/images/savouries/parippu-vada.jpg" },
  { name: "Bonda",             ml: "ബോണ്ട",           cat: "Savouries", price: "₹12 / pc",  diet: "veg", img: "assets/images/savouries/bonda.jpg" },
  { name: "Pakoda",            ml: "പക്കോട",          cat: "Savouries", price: "₹180 / kg", diet: "veg", img: "assets/images/savouries/pakoda.jpg" },

  /* ---------------- BAKERY / BREAD ---------------- */
  { name: "Milk Bread",        ml: "മിൽക്ക് ബ്രെഡ്",  cat: "Bakery", price: "₹45 / loaf", diet: "egg", img: "assets/images/bakery/bread-loaf.jpg" },
  { name: "Sweet Bun",         ml: "സ്വീറ്റ് ബൺ",     cat: "Bakery", price: "₹15 / pc",   diet: "egg", img: "assets/images/bakery/sweet-bun.jpg" },
  { name: "Dilkush",           ml: "ദിൽകുഷ്",         cat: "Bakery", price: "₹25 / pc",   diet: "egg", img: "assets/images/bakery/dilkush.jpg", popular: true },
  { name: "Butter Rusk",       ml: "റസ്ക്",           cat: "Bakery", price: "₹95 / pack",  diet: "egg", img: "assets/images/bakery/butter-rusk.jpg" },
  { name: "Butter Croissant",  ml: "ക്രോസ്സന്റ്",     cat: "Bakery", price: "₹40 / pc",   diet: "egg", img: "assets/images/bakery/croissant.jpg" },
  { name: "Cream Bun",         ml: "ക്രീം ബൺ",        cat: "Bakery", price: "₹22 / pc",   diet: "egg", img: "assets/images/bakery/cream-bun.jpg" },
  { name: "Pizza Bun",         ml: "പിസ്സ ബൺ",        cat: "Bakery", price: "₹35 / pc",   diet: "egg", img: "assets/images/bakery/pizza-bun.jpg" },

  /* ---------------- BISCUITS & TOFFEES ---------------- */
  { name: "Butter Biscuit",    ml: "ബട്ടർ ബിസ്ക്കറ്റ്", cat: "Biscuits & Toffees", price: "₹240 / kg", diet: "veg", img: "assets/images/biscuits/butter-biscuit.jpg", popular: true },
  { name: "Coconut Cookies",   ml: "കോക്കനട്ട് കുക്കീസ്", cat: "Biscuits & Toffees", price: "₹260 / kg", diet: "veg", img: "assets/images/biscuits/coconut-cookies.jpg" },
  { name: "Jeera / Salt Biscuit", ml: "ഉപ്പ് ബിസ്ക്കറ്റ്", cat: "Biscuits & Toffees", price: "₹200 / kg", diet: "veg", img: "assets/images/biscuits/jeera-biscuit.jpg" },
  { name: "Assorted Cookies",  ml: "കുക്കീസ്",        cat: "Biscuits & Toffees", price: "₹320 / kg", diet: "veg", img: "assets/images/biscuits/assorted-cookies.jpg" },
  { name: "Milk Toffee",       ml: "മിൽക്ക് മിഠായി",  cat: "Biscuits & Toffees", price: "₹90 / pack", diet: "veg", img: "assets/images/biscuits/milk-toffee.jpg" },
  { name: "Coconut Toffee",    ml: "കോക്കനട്ട് മിഠായി", cat: "Biscuits & Toffees", price: "₹90 / pack", diet: "veg", img: "assets/images/biscuits/coconut-toffee.jpg" },
];

/* ---- Locations (Act 5). Names / area / hours are placeholders —
        replace with the real outlet details before launch. ---- */
const LOCATIONS = [
  { name: "Baby Bakers — Main Branch", type: "Bakery Outlet",     area: "Kuthuparamba Town",  hours: "8:00 AM – 9:00 PM", lat: 11.8301515, lng: 75.5642127 },
  { name: "Baby Bakers — Outlet 2",    type: "Bakery Outlet",     area: "Kuthuparamba",       hours: "8:00 AM – 9:00 PM", lat: 11.830383,  lng: 75.565903  },
  { name: "Baby Bakers — Outlet 3",    type: "Bakery Outlet",     area: "Kuthuparamba",       hours: "8:00 AM – 9:00 PM", lat: 11.829706,  lng: 75.565325  },
  { name: "Baby Bakers — Outlet 4",    type: "Bakery Outlet",     area: "Kuthuparamba",       hours: "8:00 AM – 9:00 PM", lat: 11.829425,  lng: 75.564695  },
  { name: "Stocked at Hypermarket",    type: "Hypermarket Stockist", area: "Nearby",          hours: "Store timings",     lat: 11.8243901, lng: 75.5621883 },
  { name: "Stocked at Hypermarket",    type: "Hypermarket Stockist", area: "Nearby",          hours: "Store timings",     lat: 11.8378233, lng: 75.5705547 },
];

/* ---- Our Story timeline (Act / Story section) ---- */
const TIMELINE = [
  { year: "1976", text: "A single wood-fired oven opens its shutters. The first trays of fresh bread and laddu leave the counter." },
  { year: "1990s", text: "Word of the black Kozhikodan halwa spreads. A second outlet opens to meet the festival rush." },
  { year: "2010s", text: "Custom cakes and modern bakes join the traditional sweets — four outlets now serve the town." },
  { year: "Today", text: "Fifty years on, still family-run, still baking fresh every single day — now stocked in hypermarkets too." },
];
