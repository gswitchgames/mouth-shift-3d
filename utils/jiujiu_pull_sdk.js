function _0x45c0(_0x4c9390, _0x2cbb8c) {
    var _0x52afc9 = _0x52af();
    return _0x45c0 = function (_0x45c0ec, _0x496dae) {
        _0x45c0ec = _0x45c0ec - 0x11c;
        var _0x36764a = _0x52afc9[_0x45c0ec];
        return _0x36764a;
    }, _0x45c0(_0x4c9390, _0x2cbb8c);
}
function _0x52af() {
    var _0x40c968 = [
        '2462982nxhgbm',
        '96tJOpbw',
        '9965PtweVU',
        '8575440SQGZvG',
        '7SDYFzo',
        '9772024rbbuJo',
        '9ySlboo',
        '8434570gWpKcS',
        'error',
        'jiujiu_sdk_conf.js必须放置在jiujiu_sdk.js、jiujiu_pull_sdk.js之前',
        'GET',
        'JJSdkConf',
        'req_domain',
        '/game/configs',
        'app_key',
        '/get/configs/by/keys',
        'version',
        'length',
        '/game/shares',
        '/ads',
        '配置三合一接口必须小游戏传递版本号',
        '/batch/configs',
        'JJGameConfigs',
        'JJGameConfigByKeys',
        'JJGameAds',
        'defineProperty',
        '931265utWkaV',
        '117160QqtElU'
    ];
    _0x52af = function () {
        return _0x40c968;
    };
    return _0x52af();
}
(function (_0x1b10f3, _0x1e7ca6) {
    var _0x25469b = _0x45c0, _0x813a1f = _0x1b10f3();
    while (!![]) {
        try {
            var _0x575c25 = parseInt(_0x25469b(0x11c)) / 0x1 + -parseInt(_0x25469b(0x11d)) / 0x2 + -parseInt(_0x25469b(0x11e)) / 0x3 + parseInt(_0x25469b(0x11f)) / 0x4 * (parseInt(_0x25469b(0x120)) / 0x5) + -parseInt(_0x25469b(0x121)) / 0x6 + -parseInt(_0x25469b(0x122)) / 0x7 * (-parseInt(_0x25469b(0x123)) / 0x8) + parseInt(_0x25469b(0x124)) / 0x9 * (parseInt(_0x25469b(0x125)) / 0xa);
            if (_0x575c25 === _0x1e7ca6)
                break;
            else
                _0x813a1f['push'](_0x813a1f['shift']());
        } catch (_0x2af374) {
            _0x813a1f['push'](_0x813a1f['shift']());
        }
    }
}(_0x52af, 0xb380b), !(function () {
    var _0x5df42d = _0x45c0;
    function _0xd9db70(_0x4921a6, _0xf17b10, _0x3c5561) {
        return new Promise(function (_0x3c61d3, _0x462587) {
            _0x462587('');
        });
    }
    void 0x0 === window['JJSdkConf'] && console[_0x5df42d(0x126)](_0x5df42d(0x127));
    for (var _0x8b87c1 = {
                'JJGameConfigs': function () {
                    var _0xf12938 = _0x5df42d;
                    return _0xd9db70(_0xf12938(0x128), window[_0xf12938(0x129)][_0xf12938(0x12a)] + _0xf12938(0x12b), {
                        'version': window['JJSdkConf']['version'],
                        'app_key': window[_0xf12938(0x129)][_0xf12938(0x12c)]
                    });
                },
                'JJGameConfigByKeys': function (_0x4861ac) {
                    var _0x1d62a9 = _0x5df42d;
                    return _0xd9db70(_0x1d62a9(0x128), window[_0x1d62a9(0x129)][_0x1d62a9(0x12a)] + _0x1d62a9(0x12d), {
                        'version': window[_0x1d62a9(0x129)][_0x1d62a9(0x12e)],
                        'app_key': window[_0x1d62a9(0x129)][_0x1d62a9(0x12c)],
                        'config_key': _0x4861ac
                    });
                },
                'JJGameShares': function () {
                    var _0x11a9fd = _0x5df42d, _0x37a6be = arguments[_0x11a9fd(0x12f)] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';
                    return _0xd9db70(_0x11a9fd(0x128), window['JJSdkConf'][_0x11a9fd(0x12a)] + _0x11a9fd(0x130), {
                        'app_key': window['JJSdkConf'][_0x11a9fd(0x12c)],
                        'p_code': _0x37a6be
                    });
                },
                'JJGameAds': function () {
                    var _0x231225 = _0x5df42d, _0x31fa77 = arguments[_0x231225(0x12f)] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';
                    return _0xd9db70('GET', window['JJSdkConf']['req_domain'] + _0x231225(0x131), {
                        'app_key': window[_0x231225(0x129)][_0x231225(0x12c)],
                        'position_id': _0x31fa77
                    });
                },
                'JJGetGameConfigAdShare': function () {
                    var _0x268585 = _0x5df42d, _0x398897 = arguments[_0x268585(0x12f)] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : '', _0x5d929e = {};
                    return _0x398897 && (_0x5d929e = _0x398897()), _0x5d929e['app_key'] = window['JJSdkConf'][_0x268585(0x12c)], _0x5d929e[_0x268585(0x12e)] = window['JJSdkConf'][_0x268585(0x12e)], void 0x0 === _0x5d929e[_0x268585(0x12e)] ? void console['error'](_0x268585(0x132)) : _0xd9db70(_0x268585(0x128), window[_0x268585(0x129)][_0x268585(0x12a)] + _0x268585(0x133), _0x5d929e);
                }
            }, _0x4605e6 = [
                _0x5df42d(0x134),
                _0x5df42d(0x135),
                'JJGameShares',
                _0x5df42d(0x136),
                'JJGetGameConfigAdShare'
            ], _0x4ba931 = _0x4605e6[_0x5df42d(0x12f)] - 0x1; _0x4ba931 >= 0x0; _0x4ba931--)
        !function (_0x4f93f9, _0x3dfe30) {
            var _0x12d39a = _0x5df42d;
            Object[_0x12d39a(0x137)](window, _0x4f93f9, {
                'value': _0x3dfe30,
                'writable': !0x1,
                'enumerable': !0x0,
                'configurable': !0x0
            });
        }(_0x4605e6[_0x4ba931], _0x8b87c1[_0x4605e6[_0x4ba931]]);
}()));