export default function ({req}) {
    // demo例子 具体中间件按需修改
    function getCookie(cookieData) {
        console.log(cookieData, '我是中间件');
    }
    console.log(req.headers, 'headers');
    req && req.headers.cookie && getCookie(req.headers.cookie);
}