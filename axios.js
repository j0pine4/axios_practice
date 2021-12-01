
const form = document.querySelector('#form');
const result = document.querySelector('#result')

function showOutput(res) {
    result.innerHTML =  `
    <div class="card card-body">
        <h5> Status: ${res.status} </h5>
    </div>

    <div class="card mt-5">
        <div class="card-header"> Headers </div>
        <div class="card-body"> 
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
        </div>
    </div>

    <div class="card mt-5">
        <div class="card-header"> Response Data </div>
        <div class="card-body"> 
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
        </div>
    </div>
    `
}

// Get Requests
function getTodos(limit) {
    // Long Way
    // axios({
    //     method : 'get',
    //     url : 'https://jsonplaceholder.typicode.com/todos',
    //     params : {
    //         _limit: 5
    //     }
    // })
    // .then( response =>{
    //     showOutput(response)
    // })

    // Short Way
    axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        .then( response =>{
        showOutput(response)
    })
}

// Connecting to our site
getBtn = document.querySelector('#get')
getBtn.addEventListener('click', function(e){
    getTodos(5)
})

// Post Requests
function postTodos(title){
    // Long Way
    axios({
        method : 'post',
        url : 'https://jsonplaceholder.typicode.com/todos',
        data : {
            title : `${title}`,
            completed : false
        }
    })
    .then( response =>{
        showOutput(response)
    })
}

// Connecting to our site
postBtn = document.querySelector('#post')
getBtn.addEventListener('click', function(e){
    postTodos('New Post')
})


// Prevent Default Submit
form.addEventListener('submit', function(e){
    e.preventDefault();
})
