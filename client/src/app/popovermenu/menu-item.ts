export default class MenuItem {
    public url?: string;
    public icon: string;
    public callback?: () => void | object;
    public label: string;
    public langParam?: object;
}
