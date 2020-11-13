export default {
    state: {
        shopList: [ 
            { id: 1,
                title: 'Nike Red',
                descr: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature ',
                img: require('../assets/img/1.png'),
                gallery: [
                  { name: 'Nike boots First', img: require('../assets/img/1.png')},
                  { name: 'Nike boots First', img: require('../assets/img/2.png')},
                  { name: 'Nike boots First', img: require('../assets/img/3.png')},
                ]
            },
            { id: 2,
                title: 'Nike Brown',
                descr: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature ',
                img: require('../assets/img/4.png'),
                gallery: [
                    { name: 'Nike boots First', img: require('../assets/img/4.png')},
                    { name: 'Nike boots First', img: require('../assets/img/5.png')},
                    { name: 'Nike boots First', img: require('../assets/img/6.png')},
                  ]
            },
            { id: 3,
                title: 'Nike Green', 
                descr: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature ',
                img: require('../assets/img/7.png'),
                gallery: [
                    { name: 'Nike boots First', img: require('../assets/img/7.png')},
                    { name: 'Nike boots First', img: require('../assets/img/8.png')},
                    { name: 'Nike boots First', img: require('../assets/img/9.png')},
                  ]
            },
            { id: 4,
                title: 'Nike Street',
                descr: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature ',
                img: require('../assets/img/10.png'),
                gallery: [
                    { name: 'Nike boots First', img: require('../assets/img/11.png')},
                    { name: 'Nike boots First', img: require('../assets/img/12.png')},
                  ] 
            }     
        ]
    },
    mutations: {
        setMessage(state, payload){
            state.message = payload
        }
    },
    actions: {
        setMessage({commit}, payload) {
            commit('setMessage', payload)
        }
    },
    getters: {
        getShopList (state) {
            return state.shopList
        },
        getProduct: (state) => (id) => {
            return state.shopList.find(product => product.id == id)
        }
    },
}
