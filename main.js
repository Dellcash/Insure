PetiteVue.createApp({
  open: false,
  tabs: ["How we work", "Blog", "Account", "View plans"],
  differents: [
    {
      icon: "./images/icon-snappy-process.svg",
      title: "Snappy Process",
      text: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
    },
    {
      icon: "./images/icon-affordable-prices.svg",
      title: "Affordable Prices",
      text: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
      icon: "./images/icon-people-first.svg",
      title: "People First",
      text: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
    },
  ],
  socialIcons: [
    {
      icon: "./images/icon-facebook.svg",
      link: "https://www.facebook.com/",
    },
    {
      icon: "./images/icon-twitter.svg",
      link: "https://www.twitter.com/",
    },
    {
      icon: "./images/icon-instagram.svg",
      link: "https://www.instagram.com/",
    },
    {
      icon: "./images/icon-pinterest.svg",
      link: "https://www.pinterest.com/",
    },
  ],
  links:{
    ourCompany: {
      title: "Our company",
      firstLink: "How we work",
      secondLink: "Why Insure?",
      thirdLink: "View plans",
      forthLink: "Reviews",
    },
    helpMe: {
      title: "Help me",
      firstLink: "FAQ",
      secondLink: "Terms of use",
      thirdLink: "Privacy policy",
      forthLink: "Cookies",
    },
    contact: {
      title: "Contact",
      firstLink: "Sales",
      secondLink: "Support",
      thirdLink: "Live chat",
      forthLink: "Others",
    },
    careers: {
      title: "Careers",
      firstLink: "Press",
      secondLink: "Licenses",
    },
  }
}).mount( "#app" );