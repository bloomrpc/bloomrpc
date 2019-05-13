const { BrowserWindow, remote, shell } = require('electron');
const path = require('path');


let aboutWin = null;

module.exports = function openAboutWindow(parentWindow) {
    if (aboutWin !== null) {
        aboutWin.focus();
        return aboutWin;
    }

    const index_html = 'file://' + path.join(__dirname, 'about.html');

    const options = {
        width: 400,
        height: 400,
        useContentSize: true,
        titleBarStyle: 'hidden-inset',
        icon: "../resources/icon.ico",
        parent: parentWindow,
    }

    aboutWin = new (BrowserWindow || remote.BrowserWindow)(options);

    aboutWin.once('closed', () => {
        aboutWin = null;
    });
    aboutWin.loadURL(index_html);

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
            const pkgDep = require('../package.json')
            info = {
                icon_path: "../resources/icon.ico",
                product_name: pkgDep.productName,
                copyright: pkgDep.license,
                homepage: pkgDep.homepage,
                description: pkgDep.description,
                license: pkgDep.license,
                bug_report_url: pkgDep.bugs.url,
                use_version_info: true
            }
        } else {
            info = {
                icon_path: "../resources/icon.ico",
                product_name:   PRODUCT_NAME,
                copyright:      COPYRIGHT,
                homepage:       HOMEPAGE,
                description:    DESCRIPTION,
                license:        LICENSE,
                bug_report_url: BUG_REPORT_URL,
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

