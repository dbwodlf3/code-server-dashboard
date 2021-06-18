/** Return HTML Page relative paths of auth.
 */

import * as interfaces from 'lib/interface'

export const getLoginPage: interfaces.ViewFunction = function (req, res) {
    res.render('auth/login.njk');
    return;
};