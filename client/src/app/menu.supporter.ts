import MenuItem from '@app/popovermenu/menu-item';

export default class MenuSupporter {
    
    menu: Array<MenuItem> = [];

    constructor(
        menuFactory: () => MenuItem[]
    ){
        this.menu = menuFactory();
    }
}
