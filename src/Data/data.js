const HEADER = "Mula Cloud Project";
const MOTTO = "Kami membantu mengembangkan aplikasi bisnis dengan menggunakan teknologi opensource yang telah terpercaya.";

const NAVBAR_DATA = [
  { id: 1, url: "/", label: "Beranda" },
  { id: 2, url: "#services", label: "Layanan" },
  { id: 3, url: "#about-us", label: "Tentang Kami" },
  { id: 4, url: "#tech", label: "Teknologi" },
    { id: 5, url: "https://blog.mula.cloud", label: "Blog" },
];
const BANNER_DATA = {
  HEADING: "Bersama membangun bisnis anda",
  DECRIPTION: MOTTO,
};
const SERVICE_DATA = {
  HEADING: "Layanan Kami",
  ALL_SERVICES: "All Services",
  SERVICE_LIST: [
    {
      LABEL: "Pelatihan Developer Muda",
      DESCRIPTION:
        "Kami dapat membantu perusahaan yang sedang mengembangkan aplikasi bisnis mereka atau ERP dengan cara  melakukan pelatihan beberapa teknologi yang kami kuasai seperti : Odoo, Flectra, Django atau Python",
      URL: "images/service1.png"
    },
    {
      LABEL: "Implementasi & Perawatan ERP",
      DESCRIPTION:
        "Bagi perusahaan yang belum mengimplementasikan sistem ERP maka kami dapat membantu anda untuk mengimplementasikan salah satu dari sistem ERP yang kami kuasai seperti : Odoo atau Flectra",
      URL: "images/service2.png"
    },
    {
      LABEL: "Pengembangan Aplikasi Bisnis",
      DESCRIPTION:
        "Anda memiliki spesifikasi aplikasi bisnis yang rumit, maka kami dapat membantu anda membangunya bersama, dengan beberapa teknologi yang kami kuasai seperti: Django, Odoo atau Flectra.",
      URL: "images/service3.png"
    }
  ]
};

const ABOUT_DATA = {
  HEADING: "Mengapa Memilih Kami ?",
  TITLE: "Apa yang membuat kami berbeda: ",
  IMAGE_URL: "images/network.png",
  WHY_CHOOSE_US_LIST: [
    "Menyediakan solusi layanan dengan harga yang terjangkau",
    "Transparan tentang harga sebuah solusi",
    "Telah berpengalaman dalam bidang ini lebih dari 5 tahun",
    "Kami berpartner secara kekeluargaan sehingga komunikasi menjadi lebih mudah",
    "Berkomitmen pada proses",
  ]
};
const TECH_DATA = {
  HEADING: "Teknologi yang kami gunakan",
  TECH_LIST: [
    {
      LABEL: "Odoo",
      DESCRIPTION:
        "Odoo adalah platform pengembangan aplikasi bisnis yang sangat handal dan telah teruji diberbagai jenis bisnis. Odoo lebih terkenal sebagai platform ERP, namun sebenarnya Odoo menyimpan potensi lebih dari itu",
      URL: "images/tech_odoo.png"
    },
    {
      LABEL: "Flectra",
      DESCRIPTION:
        "Flectra merupakan platform ERP yang telah banyak digunakan di dunia. Dengan desain nya yang modular, implementasi ERP menjadi sangat mudah dan menyenangkan",
      URL: "images/tech_flectra.png"
    },
    {
      LABEL: "Python",
      DESCRIPTION:
        "Python memiliki fitur-fitur segudang yang dengannya membangun aplikasi bisnis baik web-based maupun desktop-based menjadi mudah dan menyenangkan.",
      URL: "images/tech_python.png"
    },
    {
      LABEL: "FreeBSD",
      DESCRIPTION:
        "FreeBSD adalah salah satu dari sistem operasi opensource yang mampu memberikan performa dan stabilitas luar biasa.",
      URL: "images/tech_freebsd.png"
    },
    {
      LABEL: "Postgresql",
      DESCRIPTION:
        "Performa dan fitur Postgresql sebagai salah satu basis data opensource tentu sudah tidak diragukan lagi. Kami memilih Postgresql sebagai basis data pilihan kami karena performa dan ketangguhannya serta didukung dengan fitur yang komplit",
      URL: "images/tech_postgresql.png"
    },
    {
      LABEL: "Django",
      DESCRIPTION:
        "Kami sudah bekerja menggunakan django sejak 2009 dan Django telah terbukti memiliki fitur yang sangat membantu kami dalam membangun aplikasi bisnis. Dukungan komunitas yang luas pun memudahkan kami untuk menyelesaikan masalah-masalah terkait pengembangan aplikasi",
      URL: "images/tech_django.png"
    }
  ]
};

const SOCIAL_DATA = {
  HEADING: "Find us on social media",
  IMAGES_LIST: [
    "images/facebook-icon.png",
    "images/instagram-icon.png",
    "images/whatsapp-icon.png",
    "images/twitter-icon.png",
    "images/linkedin-icon.png",
    "images/snapchat-icon.png"
  ]
};

const FOOTER_DATA = {
  DESCRIPTION: MOTTO,
  CONTACT_DETAILS: {
    HEADING: "Kontak kami",
    ADDRESS: "Jl Cijerokaso 1 no 44, Sarijadi, Sukasari Bandung",
    MOBILE: '+62 812 2473 1715',
    EMAIL: "mulacloud@protonmail.com"
  },
  SUBSCRIBE_NEWSLETTER: "Subscribe newsletter",
  SUBSCRIBE: "Subscribe"
};

const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  SERVICE_DATA,
  ABOUT_DATA,
  TECH_DATA,
  SOCIAL_DATA,
  FOOTER_DATA
};
export default MOCK_DATA;
