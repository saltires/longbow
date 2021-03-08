const { common } =  require('../lib/common')

test('测试 flatten', () => {
    expect(common.flatten([1,2,[3,4]])).toEqual([1,2,3,4])
    expect(common.flatten([1,2,[3,4],[5,6,[7,8]]])).toEqual([1,2,3,4,5,6,7,8])
})