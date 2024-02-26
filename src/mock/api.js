export default [{
    url: '/mock/api/getAdress',
    method: 'get',
    response: () => {
        return {
            code: 200,
            msg: 'OK',
            data: {
                'Github': 'https://github.com/lansdarklauh',
                '哔哩哔哩': 'https://space.bilibili.com/3221223'
            }
        }
    }
}]