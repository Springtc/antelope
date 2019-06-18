var Random = Mock.Random
var index = Mock.mock('http://api.com/index', {
    // "user|5-10": [{
    //   'name': '@cname', //中文名称
    //   'age|1-100': 100, //100以内随机整数  属性值100只用来确定类型
    //   'birthday': '@date("yyyy-MM-dd")', //日期
    //   'city': '@city(true)'//中国城市
    // }],
    "swiper": [{
        'imgPath': './static/homePic/swiper1.jpeg',
        'id': '@id'
    }, {
        'imgPath': './static/homePic/swiper2.jpeg',
        'id': '@id'
    }],
    'section1': {
        'list|2': [{
            'imgPath': Random.image('800x400', '#b7ddf2', '#333', 'png', '免配送'),
            'id': '@id'
        }],
        'banner': Random.image('400x100', '#ffcc33', '#FFF', 'png', 's1-banner')
    },
    'section2': {
        'list': [{
            'title': '羊角卡111',
            'price': 100,
            'imgPath': './static/homePic/card1.jpeg',
            'id': '@id'
        }, {
            'title': '羊角卡222',
            'price': 100,
            'imgPath': './static/homePic/card2.jpeg',
            'id': '@id'
        }, {
            'title': '羊角卡333',
            'price': 100,
            'imgPath': './static/homePic/card1.jpeg',
            'id': '@id'
        }],
        'banner': Random.image('400x100', '#b97cc9', '#FFF', 'png', 's2-banner')
    },


    'section3': {
        'list': [{
            'title': '您的羚羊卡余额',
            // 在end数组里随机取一个
            'imgPath': './static/homePic/card1.jpeg',
            'id': '@id',
            'price': 0,
            'end': ['0'],
        }],
        'banner': Random.image('400x100', '#b97cc9', '#FFF', 'png', 's3-banner')
    },


    'section4': {
        'banner': Random.image('400x100', '#ffcc33', '#FFF', 'png', '羚羊礼物即将到期')
    },

    'section5': {
        'list|5': [{
            'title': '指定商品30元优惠券',
            'invalidTime': '2019年6月31日',
            // 在end数组里随机取一个
            'imgPath': './static/homePic/product.jpeg',
            'id': '@id',
            'price': 0,
            'end': ['0'],
        }]
    },

});

var detail = Mock.mock('http://api.com/detail', {
    "view|1": [{
        'title|1': ['卡布奇诺', '拿铁', '红茶拿铁', '摩卡', '焦糖玛奇朵', '柠檬美式', '纯美式 '],
        'id': '@id',
        'price': 18,
        'chose|3': [{
            'col|+1': ['冰', '常温', '热'],
            'size|+1': ['单糖', '半糖', '不加糖']
        }]
    }],

    'swiper|2': [{
        'imgSrc': Random.image('400x400', '#ffcc33', '#FFF', 'png', ''),
        'id': '@id'
    }],
}); 
var category = Mock.mock('http://api.com/category', {
    'aside': [{
        'title': '羚羊咖啡',
        'list': [{
            'title': '红茶拿铁',
            'imgPath': './static/homePic/drink1.jpg',
            'price': '17'
        }, {
            'title': '@last',
            'imgPath': './static/homePic/drink2.jpg',
            'price': '27'
        }, {
            'title': '@last',
            'imgPath': './static/homePic/drink3.jpg',
            'price': '19'
        }, {
            'title': '@last',
            'imgPath': './static/homePic/drink4.jpg',
            'price': '14'
        }, {
            'title': '@last',
            'imgPath': './static/homePic/drink5.jpg',
            'price': '21'
        }, {
            'title': '@last',
            'imgPath': './static/homePic/drink6.jpg',
            'price': '19'
        }, {
            'title': '@last',
            'imgPath': './static/homePic/drink7.jpg',
            'price': '12'
        }, {
            'title': '@last',
            'imgPath': './static/homePic/drink8.jpg',
            'price': '15'
        }, {
            'title': '@last',
            'imgPath': './static/homePic/drink9.jpg',
            'price': '7'
        }]
    }, {
        'title': '沙冰',
        'list|2': [{
            'title': '@last',
            'imgPath': Random.image('2000x2000', '#5169b4', '#FFF', 'png', ''),
        }]
    }, {
        'title': '羚羊气泡',
        'list|6': [{
            'title': '@last',
            'imgPath': Random.image('2000x2000', '#5169b4', '#FFF', 'png', ''),
        }]
    }, {
        'title': '经典奶茶',
        'list|6': [{
            'title': '@last',
            'imgPath': Random.image('2000x2000', '#5169b4', '#FFF', 'png', ''),
        }]
    }, {
        'title': '健康轻食',
        'list|6': [{
            'title': '@last',
            'imgPath': Random.image('2000x2000', '#5169b4', '#FFF', 'png', ''),
        }]
    }]

}); 
export { index, detail, category }