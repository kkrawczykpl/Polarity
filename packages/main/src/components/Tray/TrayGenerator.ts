import type { BrowserWindow, MenuItemConstructorOptions, Rectangle} from 'electron';
import { clipboard} from 'electron';
import { Menu, Tray } from 'electron';
import type { Coordinates } from '../../../../common/interfaces/Coordinates';

export class TrayGenerator {

    private tray: Tray;
    private mainWindow: BrowserWindow;

    constructor(mainWindow: BrowserWindow) {
        this.tray = this.createTray();
        this.mainWindow = mainWindow;
    }

    getWindowPosition = (): Coordinates => {
        const windowBounds: Rectangle = this.mainWindow.getBounds();
        const trayBounds: Rectangle = this.tray?.getBounds();
        const x: number = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2));
        const y: number = Math.round(trayBounds.y + trayBounds.height);
        return { x, y };

    };

    showWindow = (): void => {
        const position: Coordinates = this.getWindowPosition();
        this.mainWindow.setPosition(position.x, position.y, false);
        this.mainWindow.show();
        this.mainWindow.setVisibleOnAllWorkspaces(true);
        this.mainWindow.focus();
        this.mainWindow.setVisibleOnAllWorkspaces(false);
    };

    toggleWindow = (): void => {
        if(this.mainWindow.isVisible()) {
            this.mainWindow.hide();
        } else {
            this.showWindow();
        }
    };

    rightClickMenu = () => {
        // @TODO: This should be moved to configuration
        const menu: Array<MenuItemConstructorOptions> = [
            {
                role: 'quit',
                accelerator: 'Ctrl+Q',
            },
        ];

        this.tray.popUpContextMenu(Menu.buildFromTemplate(menu));
    };

    createTray = (): Tray => {
        // @TODO: Tray path shout be moved to configuration
        const image = clipboard.readImage();
        const tray = new Tray(image);
        tray.setIgnoreDoubleClickEvents(true);
        tray.setToolTip('Polarity Application running...');

        tray.on('click', this.toggleWindow);
        tray.on('right-click', this.rightClickMenu);
        
        return tray;
    };
}
