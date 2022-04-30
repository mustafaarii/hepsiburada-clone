import ILink from "../Header/models/ILink";
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
            {name:"",image:"/images/menus/menu-head.png",url:""},
            {name:"",image:"/images/menus/menu1.png",url:""},
            {name:"",image:"/images/menus/menu2.png",url:""},
            {name:"",image:"/images/menus/menu3.png",url:""},
            {name:"",image:"/images/menus/menu4.png",url:""},
            {name:"",image:"/images/menus/menu5.png",url:""},
            {name:"",image:"/images/menus/menu6.png",url:""},
            {name:"",image:"/images/menus/menu7.png",url:""},
            {name:"",image:"/images/menus/menu8.png",url:""},
            {name:"",image:"/images/menus/menu9.png",url:""},
            {name:"",image:"/images/menus/menu10.png",url:""},
            {name:"",image:"/images/menus/menu11.png",url:""},
            {name:"",image:"/images/menus/menu12.png",url:""},
        ]
    },
    {name:"Ev, Yaşam, Kırtasiye Ofis",submenuList:[{name:"Sofra/Mutfak"}]},
    {name:"Oto, Bahçe, Yapı, Market"},
    {name:"Spor, Outdoor"},
    {name:"Kozmetik, Kişisel Bakım"},
    {name:"Süpermarket, Pet Shop"},
    {name:"Kitap, Müzik, Film, Hobi"}
  ];