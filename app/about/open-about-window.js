const { BrowserWindow, remote, shell } = require('electron');
const path = require('path');
const icon = process.env.HOT
    ? path.join(__dirname, '../../resources/icon.ico')
    : path.join(process.resourcesPath, 'icon.ico')

let aboutWin = null;

module.exports = function openAboutWindow(parentWindow) {
    if (aboutWin !== null) {
        aboutWin.focus();
        return aboutWin;
    }

    const options = {
        width: 400,
        height: 400,
        useContentSize: true,
        titleBarStyle: 'hidden-inset',
        icon: icon,
        parent: parentWindow,
        webPreferences: {
            nodeIntegration: true
        }
    }

    aboutWin = new (BrowserWindow || remote.BrowserWindow)(options);

    aboutWin.once('closed', () => {
        aboutWin = null;
    });

    const aboutHTML = process.env.NODE_ENV !== 'production'
        ? `file://${__dirname}/about.html`
        : `file://${__dirname}/about/about.html`
    aboutWin.loadURL(aboutHTML);

    aboutWin.webContents.on('will-navigate', (e, url) => {
        e.preventDefault();
        shell.openExternal(url);
    });
    aboutWin.webContents.on('new-window', (e, url) => {
        e.preventDefault();
        shell.openExternal(url);
    });

    aboutWin.webContents.once('dom-ready', () => {
        let info;
        if (process.env.NODE_ENV !== 'production') {
            const pkgDep = require('../../package.json')
            info = {
                icon_path: icon,
                product_name: pkgDep.productName,
                copyright: pkgDep.license,
                homepage: pkgDep.homepage,
                description: pkgDep.description,
                license: pkgDep.license,
                bug_report_url: pkgDep.bugs.url,
                version: pkgDep.version,
                use_version_info: true
            }
        } else {
            info = {
                icon_path: icon,
                product_name: PRODUCT_NAME,
                copyright: COPYRIGHT,
                homepage: HOMEPAGE,
                description: DESCRIPTION,
                license: LICENSE,
                bug_report_url: BUG_REPORT_URL,
                version: VERSION,
                use_version_info: true,
            }
        }
        aboutWin.webContents.send('about-window:info', info);
    });

    aboutWin.once('ready-to-show', () => {
        aboutWin.show();
    });

    aboutWin.setMenu(null);
    aboutWin.setMenuBarVisibility(false)

    return aboutWin;
}

