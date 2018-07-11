

    var p1=document.getElementById('p1');
    p1.addEventListener('click',function (event) {
        event.preventDefault();
        console.log('你好世界！');
    });

    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!',
            date: "该页面加载于" + new Date().toLocaleString(),
            arry: [
                {title:"王小华"},
                {title:'里打住'},
                {title:'问螃蟹'}
            ]
        }
    })








