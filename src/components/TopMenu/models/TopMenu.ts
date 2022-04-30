import { TopImageMenu } from "./TopImageMenu";
import { TopSubMenu } from "./TopSubMenu";

export class TopMenu{
    name? :string;
    submenuList? : Array<TopSubMenu>;
    imageMenuList?: Array<TopImageMenu>;
}