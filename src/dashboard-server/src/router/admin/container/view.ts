/** Return HTML Page relative paths of auth.
 */

import * as interfaces from 'lib/interface'

export const getDashBoardPage: interfaces.ViewFunction = function (req, res) {
    res.render('admin/container/dashboard.njk');
    return;
};

export const getCreatePage: interfaces.ViewFunction = function (req, res) {
    res.render('admin/container/create.njk');
    return;
};

export const getDetailPage: interfaces.ViewFunction = function (req, res) {
    res.render('admin/container/container.njk');
    return;
};