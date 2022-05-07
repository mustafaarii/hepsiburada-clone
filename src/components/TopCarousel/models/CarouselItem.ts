import { SocialLinks } from "./SocialLinks"

export class CarouselItem{
    headText?:string // başlık
    description?:string // açıklama
    buttonText?:string // buton yazısı
    buttonColor?:string // buton rengi
    noteText?:string // Altta küçük not yazısı
    imageURL?:string // resim yolu
    imageLink?:string // resim href
    iconURL?:string
    socialLinks?:SocialLinks // paylaş butonu içeriği
}