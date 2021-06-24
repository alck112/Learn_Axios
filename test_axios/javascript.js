const btns = document.querySelectorAll('button')

btns[1].onclick = function () {

    axios({

        method: 'post',

        url: 'http://localhost:3000/posts',

        data: {

            title: "hahaha",
            author: "yoff"
        }
    }).then( response => {

        console.log(response);
    });
};

btns[2].onclick = function () {

    axios({

        method: 'put',

        url: 'http://localhost:3000/posts/1',

        data: {

            title: "good day",
            author: 'good'
        }
    }).then( response => {

        console.log(response);
    });
};

btns[0].onclick = function () {

    axios({

        method: 'get',

        url: 'http://localhost:3000/posts/1',

    }).then( response => {

        console.log(response);
    });
};

btns[3].onclick = function () {

    axios({

        method: 'delete',

        url: 'http://localhost:3000/posts/3',

    }).then( response => {

        console.log(response);
    });
};

btns[4].onclick = function () {

    axios.get('http://localhost:3000/posts/1')
        .then( response => {
            console.log(response);
        });
}

btns[5].onclick = function () {
    axios.post(
        'http://localhost:3000/posts/',
        {
            title:"fffkkk",
            author:"chan"
        }).then(response => {
        console.log(response);
    });
}

btns[6].onclick = function () {

    axios.put(
        'http://localhost:3000/posts/3',
        {
            title:"fffkkk",
            author:"Li"
        }).then(response => {
        console.log(response);
    })
}

btns[7].onclick = () => {

    axios.delete(
        'http://localhost:3000/posts/3')
        .then(response => {
            console.log(response)
        })
}