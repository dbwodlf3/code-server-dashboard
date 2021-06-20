/** Return HTML Page relative paths of auth.
 */

import * as interfaces from 'lib/interface'

export const getDashBoardPage: interfaces.ViewFunction = function (req, res) {
    res.render('admin/user/dashboard.njk');
    return;
};

export const getCreatePage: interfaces.ViewFunction = function (req, res) {
    res.render('admin/user/create.njk');
    return;
};

export const getDetailPage: interfaces.ViewFunction = function (req, res) {
    res.render('admin/user/detail.njk');
    return;
};