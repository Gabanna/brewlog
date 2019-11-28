import MenuItem from '@app/popovermenu/menu-item';
import { PopoverController } from '@ionic/angular';
import { PopovermenuComponent } from '@app/popovermenu/popovermenu.component';

export default class MenuSupporter {
    
    menu: Array<MenuItem> = [];

    constructor(
        menuFactory: () => MenuItem[]
    ){
        this.menu = menuFactory();
    }
}
