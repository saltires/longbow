import _ from './browser/index.js'


describe('测试正则相关', () => {
    test('测试 isurl', () => {
        expect(_.isurl('http://www.baidu.com')).toBe(true)
        expect(_.isurl('http://www.baidu.com:80/api/dom.html#removeclass')).toBe(true)
        expect(_.isurl('http://localhost:8081')).toBe(false)
        expect(_.isurl('http://foo.localhost:8081')).toBe(true)
        expect(_.isurl('api/dom.html#removeclass')).toBe(false)
    })

    test('测试是否全是空格', () => {
        expect(_.isAllSpace('   ')).toBe(true)
        expect(_.isAllSpace('  sdsad')).toBe(false)
    })

    test('测试 isvideo_url', () => {
        expect(_.isvideo_url('https://v.qq.com/x/page/e32320gnosh.mp4')).toBe(true)
        expect(_.isvideo_url('https://v.qq.com/x/page/e32320gnosh.swf')).toBe(true)
        expect(_.isvideo_url('https://v.qq.com/x/page/e32320gnosh.mov')).toBe(true)
        expect(_.isvideo_url('https://v.qq.com/x/page/e32320gnosh.html')).toBe(false)
    })

    test('测试 isimg_url', () => {
        expect(_.isimg_url('https://v.qq.com/x/page/e32320gnosh.jpg')).toBe(true)
        expect(_.isimg_url('https://v.qq.com/x/page/e32320gnosh.jpeg')).toBe(true)
        expect(_.isimg_url('https://v.qq.com/x/page/e32320gnosh.png')).toBe(true)
        expect(_.isimg_url('https://v.qq.com/x/page/e32320gnosh.html')).toBe(false)
    })

    test('测试 istime_24', () => {
        expect(_.istime_24('19:20:21')).toBe(true)
        expect(_.istime_24('24:00:00')).toBe(false)
        expect(_.istime_24('23:59:00')).toBe(true)
        expect(_.istime_24('00:00:01')).toBe(true)
        expect(_.istime_24('00:00:00')).toBe(true)
    })

    test('测试 istime_12', () => {
        expect(_.istime_12('19:20:21')).toBe(false)
        expect(_.istime_12('12:00:00')).toBe(true)
        expect(_.istime_12('11:59:00')).toBe(true)
        expect(_.istime_12('00:00:02')).toBe(false)
        expect(_.istime_12('01:00:00')).toBe(true)
    })

    test('测试 isbase64', () => {
        expect(_.isbase64('foo')).toBe(false)
        expect(_.isbase64('data:image/jpg;base64,iVBORw0KGgoAAAA')).toBe(true)
        expect(_.isbase64('data:,Hello%2C%20World!')).toBe(true)
        expect(_.isbase64('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==')).toBe(true)
        expect(_.isbase64('data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E')).toBe(true)
    })

    test('测试 ismoney', () => {
        expect(_.ismoney('3.00')).toBe(true)
        expect(_.ismoney('-13.5')).toBe(true)
        expect(_.ismoney('11,444,111,111,123')).toBe(true)
        expect(_.ismoney('11,12')).toBe(false)
        expect(_.ismoney('11,211.34')).toBe(true)
    })

    test('测试 isbank_card', () => {
        expect(_.isbank_card('3.4')).toBe(false)
        expect(_.isbank_card('-100000000000')).toBe(false)
        expect(_.isbank_card('6222022468013284338')).toBe(true)
        expect(_.isbank_card('6222022382437706219')).toBe(true)
        expect(_.isbank_card('foobar')).toBe(false)
    })

    test('测试 isname_chinese', () => {
        expect(_.isname_chinese('3.4')).toBe(false)
        expect(_.isname_chinese('-100000000000')).toBe(false)
        expect(_.isname_chinese('滕子京')).toBe(true)
        expect(_.isname_chinese('拓跋天赐')).toBe(true)
        expect(_.isname_chinese('foobar')).toBe(false)
        expect(_.isname_chinese('张则')).toBe(true)
    })

    test('测试 islicense_plate', () => {
        expect(_.islicense_plate('3.4')).toBe(false)
        expect(_.islicense_plate('浙AD12345')).toBe(true)
        expect(_.islicense_plate('沪BC8778')).toBe(true)
        expect(_.islicense_plate('foobar')).toBe(false)
    })

    test('测试 ismd5', () => {
        expect(_.ismd5('3.4')).toBe(false)
        expect(_.ismd5('0E1F702FEB35743D393231BFE6759CD3')).toBe(true)
        expect(_.ismd5('47C4647666DECED3E7C01FFCF4A084F6')).toBe(true)
        expect(_.ismd5('foobar')).toBe(false)
    })

    test('测试 isphone_rigorous', () => {
        expect(_.isphone_rigorous('3.4')).toBe(false)
        expect(_.isphone_rigorous('19875826231')).toBe(true)
        expect(_.isphone_rigorous('13438035502')).toBe(true)
        expect(_.isphone_rigorous('13438')).toBe(false)
        expect(_.isphone_rigorous('1343803550')).toBe(false)
        expect(_.isphone_rigorous('01343803550')).toBe(false)
    })

    test('测试 isphone_loose', () => {
        expect(_.isphone_loose('3.4')).toBe(false)
        expect(_.isphone_loose('19875826231')).toBe(true)
        expect(_.isphone_loose('13438035502')).toBe(true)
        expect(_.isphone_loose('13438')).toBe(false)
        expect(_.isphone_loose('1343803550')).toBe(false)
        expect(_.isphone_loose('13438035500')).toBe(true)
    })

    test('测试 isdate', () => {
        expect(_.isdate('2020-01-02')).toBe(true)
        expect(_.isdate('19875826231')).toBe(false)
        expect(_.isdate('2021/02/03')).toBe(true)
        expect(_.isdate('2021/02-03')).toBe(false)
        expect(_.isdate('2021-02-03')).toBe(true)
    })

    test('测试 isemail', () => {
        expect(_.isemail('2020-01-02')).toBe(false)
        expect(_.isemail('19875826231')).toBe(false)
        expect(_.isemail('pqlhm@163.com')).toBe(true)
        expect(_.isemail('minbjecopk@21cn.com')).toBe(true)
        expect(_.isemail('folr@eyou.com')).toBe(true)
    })

    test('测试 istel', () => {
        expect(_.istel('2020-01-02')).toBe(false)
        expect(_.istel('19875826231')).toBe(false)
        expect(_.istel('0552-86736556')).toBe(true)
        expect(_.istel('0000-28727722')).toBe(true)
    })

    test('测试 isid_card', () => {
        expect(_.isid_card('2020-01-02')).toBe(false)
        expect(_.isid_card('19875826231')).toBe(false)
        expect(_.isid_card('120101200301019414')).toBe(true)
        expect(_.isid_card('340101200301014673')).toBe(true)
    })

    test('测试 ispassports', () => {
        expect(_.ispassports('M92274710')).toBe(false)
        expect(_.ispassports('19875826231')).toBe(false)
    })

    test('测试 isusername', () => {
        expect(_.isusername('foobar')).toBe(true)
        expect(_.isusername('19875826231')).toBe(true)
        expect(_.isusername('123')).toBe(false)
        expect(_.isusername('foo')).toBe(false)
        expect(_.isusername('foo3_3-')).toBe(true)
        expect(_.isusername('foo@hihi')).toBe(false)
    })
    
    test('测试 ischinese', () => {
        expect(_.ischinese('foobar')).toBe(false)
        expect(_.ischinese('19875826231')).toBe(false)
        expect(_.ischinese('气质')).toBe(true)
    })

    test('测试 isdecimal', () => {
        expect(_.isdecimal('foobar')).toBe(false)
        expect(_.isdecimal('19875826231')).toBe(false)
        expect(_.isdecimal('4.5')).toBe(true)
    })

    test('测试 isqq_number', () => {
        expect(_.isqq_number('100010')).toBe(true)
        expect(_.isqq_number('152042')).toBe(true)
        expect(_.isqq_number('990329')).toBe(true)
        expect(_.isqq_number('1028476602')).toBe(true)
    })

    test('测试 ispassword', () => {
        expect(_.ispassword('Abcde')).toBe(false)
        expect(_.ispassword('Ab12356')).toBe(false)
        expect(_.ispassword('329ABc&')).toBe(true)
    })

    test('测试 isip_v4', () => {
        expect(_.isip_v4('Abcde')).toBe(false)
        expect(_.isip_v4('61.104.170.242')).toBe(true)
        expect(_.isip_v4('b4fc:391d:3ec8:68ef:0ec8:529b:166d:ece2')).toBe(false)
    })
    
    test('测试 iscolor_16', () => {
        expect(_.iscolor_16('Abcde')).toBe(false)
        expect(_.iscolor_16('#FFB400')).toBe(true)
        expect(_.iscolor_16('#CC00FF')).toBe(true)
    })

    test('测试 iswx_username', () => {
        expect(_.iswx_username('cbc')).toBe(false)
        expect(_.iswx_username('saltire')).toBe(true)
    })

    test('测试 邮政编码', () => {
        expect(_.iszip_code('230000')).toBe(true)
        expect(_.iszip_code('231200')).toBe(true)
    })
})


