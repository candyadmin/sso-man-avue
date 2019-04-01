import Mock from 'mockjs'
export default ({ mock }) => {

    //获取表格数据
    Mock.mock('/group/getTable', 'get', () => {
        let list = []
        for (let i = 0; i < 5; i++) {
            list.push(Mock.mock({
                id: 111,
                name:Mock.mock('@cname'),
                code:Mock.mock('@cname'),
                userName :Mock.mock('@last'),
                gmtCreate: 1532932422071,
                gmtModified: 1532932422071,
                status: [0, 1]
            }))
        }
        return {
            data: {
                total: 11,
                pageSize: 10,
                tableData: list
            }
        }
    })





}
