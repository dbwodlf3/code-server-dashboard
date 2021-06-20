/** Return HTML Page relative paths of auth.
 */

import * as interfaces from 'lib/interface'

export const getDashBoardPage: interfaces.ViewFunction = function (req, res) {
    res.render('user/dashboard.njk');
    return;
};


export const getContainerBoardPage: interfaces.ViewFunction = function (req, res) {
    res.render('user/container.njk');
    return;
};