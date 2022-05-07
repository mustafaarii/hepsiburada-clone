import ILink from "../Header/models/ILink";
import { CarouselContent } from "../TopCarousel/models/CarouselContent";
import { TopMenu } from "../TopMenu/models/TopMenu";

export const headerlinks : ILink[] = [
    {link:"#",label : "Siparişlerim"}, 
    {link:"#", label:"Süper Fiyat, Süper Teklif"},
    {link:"#", label:"Yurt Dışından"},
    {link:"#", label:"Kampanyalar"},
    {link:"#", label:"Girişimci Kadınlar", color : "text-red-500"},
    {link:"#", label:"Çözüm Merkezi"},
    {link:"#", label:"Hepsiburada'dan Satıcı Ol"},
];

export const topmenus : TopMenu[] = [
    {name:"Elektronik", },
    {
        name:"Moda",
        submenuList:[
            {
                name:"Moda Anasayfaları", url:"#",
                topLabelList : [
                    {name:"T-Shirt", url:"#"},
                    {name:"Ceket", url:"#"},
                    {name:"Etek", url:"#"},
                    {name:"Tayt", url:"#"},
                ]
            },
            {
                name:"Moda Kampanyaları", url:"#",
                topLabelList : [
                    {name:"Jean", url:"#"},
                    {name:"Ceket", url:"#"},
                    {name:"Pantolon", url:"#"},
                    {name:"Takım Elbise", url:"#"},
                    {name:"Yağmurluk", url:"#"},
                    {name:"Şort", url:"#"}
                ]
            },
            {
                name:"Kadın", url:"#",
                topLabelList:[
                    {name:"Elbise", url:"#"},
                    {name:"Triko & Kazak", url:"#"},
                    {name:"Mont & Kaban", url:"#"},
                    {name:"Sweatshirt", url:"#"},
                    {name:"Bluz", url:"#"},
                    {name:"Gömlek", url:"#"},
                    {name:"Pantolon", url:"#"},
                    {name:"Jean", url:"#"},
                    
                    {name:"Trençkot", url:"#"},
                ]
            },
            {
                name:"Kadın Aksesuar & Takı", url:"#",
                topLabelList:[
                    {name:"Saat", url:"#"},
                    {name:"Güneş Gözlüğü", url:"#"},
                    {name:"Takı & Bijuteri", url:"#"},
                    {name:"Mücevher", url:"#"},
                ]
            },
            {
                name:"Erkek", url:"#",
                topLabelList:[
                    {name:"Giyim", url:"#"},
                    {name:"Mont & Kaban", url:"#"},
                    {name:"Triko & Kazak", url:"#"},
                    {name:"Sweatshirt", url:"#"},
                    {name:"Eşofman", url:"#"},
                    {name:"Gömlek", url:"#"},
                    {name:"T-Shirt", url:"#"},
                    {name:"Polo T-shirt", url:"#"},
                ]
            },
            {
                name:"Erkek Aksesuar & Takı", url:"#",
                topLabelList:[
                    {name:"Saat", url:"#"},
                    {name:"Güneş Gözlüğü", url:"#"},
                    {name:"Takı", url:"#"},
                    {name:"Aksesuar", url:"#"},
                ]
            },
            {name:"Altın", url:"#"},
            {name:"Outdoor Giyim & Ayakkabı", url:"#"},
            {
                name:"Ayakkabı & Çanta", url:"#",
                topLabelList:[
                    {name:"Kadın Ayakkabı", url:"#"},
                    {name:"Günlük Gözlüğü", url:"#"},
                    {name:"Terlik", url:"#"},
                    {name:"Kadın Sandalet", url:"#"},
                    {name:"Erkek Ayakkabı", url:"#"},
                    {name:"Günlük Ayakkabı", url:"#"},
                    {name:"Outdoor Ayakkabı", url:"#"},
                ]
            },
            {
                name:"Çocuk", url:"#",
                topLabelList : [
                    {name:"Spor Ayakkabı", url:"#"},
                    {name:"Klasik Ayakkabı", url:"#"},
                    {name:"Topuklu Ayakkabı", url:"#"},
                    {name:"Bot & Çizme", url:"#"},
                ]
            },
        ],
        imageMenuList:[
            {name:"",image:"/images/menus/menu_1/menu-head.png",url:""},
            {name:"",image:"/images/menus/menu_1/menu1.png",url:""},
            {name:"",image:"/images/menus/menu_1/menu2.png",url:""},
            {name:"",image:"/images/menus/menu_1/menu3.png",url:""},
            {name:"",image:"/images/menus/menu_1/menu4.png",url:""},
            {name:"",image:"/images/menus/menu_1/menu5.png",url:""},
            {name:"",image:"/images/menus/menu_1/menu6.png",url:""},
            {name:"",image:"/images/menus/menu_1/menu7.png",url:""},
            {name:"",image:"/images/menus/menu_1/menu8.png",url:""},
            {name:"",image:"/images/menus/menu_1/menu9.png",url:""},
            {name:"",image:"/images/menus/menu_1/menu10.png",url:""},
            {name:"",image:"/images/menus/menu_1/menu11.png",url:""},
            {name:"",image:"/images/menus/menu_1/menu12.png",url:""},
        ]
    },
    {
        name:"Ev, Yaşam, Kırtasiye Ofis",
        submenuList:[
            {
                name:"Sofra/Mutfak",
                url:"#",
                topLabelList : [
                    {name:"Tava & Tencere & Düdüklü", url:"#"},
                    {name:"Tencere", url:"#"},
                    {name:"Yemek % Kahvaltı Takımı", url:"#"},
                    {name:"Çaydanlık", url:"#"},
                    {name:"Saklama", url:"#"}
                ]
            },
            {
                name:"Mobilya",
                url:"#",
                topLabelList : [
                    {name:"Salon & Oturma Odası", url:"#"},
                    {name:"Yatak Odası", url:"#"},
                    {name:"Çalışma Odası", url:"#"},
                    {name:"Mutfak", url:"#"},
                    {name:"Yemek Odası", url:"#"},
                    {name:"Genç Odası", url:"#"},
                    {name:"Bahçe & Balkon", url:"#"}
                ]
            },
            {
                name:"Aydınlatma",
                url:"#",
                topLabelList : [
                    {name:"Avize", url:"#"},
                    {name:"Lambader", url:"#"},
                    {name:"Abajur", url:"#"},
                    {name:"Masa Lambası", url:"#"},
                    {name:"Aplik", url:"#"},
                    {name:"Ampul", url:"#"},
                ]
            },
            {
                name:"Ev Tekstili",
                url:"#",
                topLabelList : [
                    {name:"Nevresim", url:"#"},
                    {name:"Yorgan", url:"#"},
                    {name:"Yastık", url:"#"},
                    {name:"Battaniye", url:"#"},
                    {name:"Halı & Kilim", url:"#"},
                    {name:"Perde", url:"#"},
                    {name:"Alez", url:"#"},
                    {name:"Banyo Tekstili", url:"#"},
                    {name:"Kırlent", url:"#"},
                ]
            },
            {
                name:"Ofis/Kırtasiye",
                url:"#",
                topLabelList : [
                    {name:"Kırtasiye Ürünleri", url:"#"},
                    {name:"Ofis Makineleri", url:"#"},
                    {name:"Fotokopi Kağıdı", url:"#"},
                    {name:"Projeksiyon Sistemleri", url:"#"},
                    {name:"Piller", url:"#"}
                ]
            },
            {
                name:"Banyo",
                url:"#",
                topLabelList : [
                    {name:"Banyo Mobilyası", url:"#"},
                    {name:"Duş Sistemleri", url:"#"},
                    {name:"Duşakabin", url:"#"},
                    {name:"Banyo Aksesuarı", url:"#"},
                    {name:"Batarya & Musluk", url:"#"},
                    {name:"Tesisat", url:"#"},
                ]
            },
            {
                name:"Elektrikli Ev Aletleri",
                url:"#",
                topLabelList : [
                    {name:"Ütüler", url:"#"},
                    {name:"Süpürgeler", url:"#"},
                    {name:"Çay Makineleri", url:"#"},
                    {name:"Kahve Makineleri", url:"#"},
                    {name:"Tost Makineleri", url:"#"},
                    {name:"Blender", url:"#"},
                ]
            },
        ],
        imageMenuList:[
            {name:"",image:"/images/menus/menu_2/menu-head.png",url:""},
            {name:"",image:"/images/menus/menu_2/menu2.png",url:""},
            {name:"",image:"/images/menus/menu_2/menu3.png",url:""},
            {name:"",image:"/images/menus/menu_2/menu4.png",url:""},
            {name:"",image:"/images/menus/menu_2/menu5.png",url:""},
            {name:"",image:"/images/menus/menu_2/menu6.png",url:""},
            {name:"",image:"/images/menus/menu_2/menu7.png",url:""},
            {name:"",image:"/images/menus/menu_2/menu8.png",url:""},
            {name:"",image:"/images/menus/menu_2/menu9.png",url:""}
        ]
    },
    {name:"Oto, Bahçe, Yapı, Market"},
    {name:"Spor, Outdoor"},
    {name:"Kozmetik, Kişisel Bakım"},
    {name:"Süpermarket, Pet Shop"},
    {name:"Kitap, Müzik, Film, Hobi"}
  ];
