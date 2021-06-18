use code;

INSERT INTO User (username, userEmail, password, activation, type, phone) VALUES ( 'admin',
	'admin@a.com',
	'9de8a573e1ff91a8680d5520fd3a9314b716e64134cac92e0b8c0c8ffe877425', /** password is:= 'admin' */
	'1',
	'55',
	'010-1111-1111'
);

INSERT INTO User (username, userEmail, password, activation, type, phone) VALUES ( 'user',
	'rji2@tolink.co.kr',
	'0be63dc27e8283d4a205cf270be4be0271b6c20c9c4fb91022daeb4701a9121d', /** password is:= 'user' */
	'1',
	'0',
	'010-1111-1111'
);