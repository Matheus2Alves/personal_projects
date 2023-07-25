// Create a test Headers object
const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml");
myHeaders.append("Vary", "Accept-Language");

// Display the key/value pairs
for (const pair of myHeaders.entries()) {
  console.log(`${pair[0]}: ${pair[1]}`);
}

/*async function myData() {
    try{
        const myheader = new Headers()
        myheader.set('login', 'matheus')
        const options = {
            headers: myheader
        }

        const headerrr = await fetch('https://api.github.com/users/omariosouto', options)
        const login = headerrr.headers.get('login')
        if(!login || !login.includes('matheus')) {
            throw new TypeError('we dont have the right user!')
        } else {
            const headerParse = await headerrr.json()
            console.log(login)
        }
    } catch(err) {
        console.error('sorry', err)
    }
}

myData()

const bla = {
        login: 'matheus',
        id: 24030,
        timeAccount: '3 years'
    }


async function getData(data) {
    try {
        const login =  data.headers.get('login')
        if(!login || !login.includes('matheus')) {
            throw new Error('we havent found your login')
        } else {
            console.log(login)
        } 
    } catch(err) {
        console.log('Error', err)
    }
}

getData(bla)*/

/*async function myData() {
    try {
        const headers = new Headers();
        headers.set('login', 'matheus');

        const options = {
            login: headers
        };

        const response = await fetch('user-token', options);
        
        if (response.headers.has('login')) {
            const login = response.headers.get('login');
            if (login && login.includes('matheus')) {
                const userData = await response.json();
                console.log(login);
                console.log(userData);
            } else {
                throw new TypeError('The user does not have the right login!');
            }
        } else {
            throw new TypeError('The response does not contain the "login" header!');
        }
    } catch (err) {
        console.log('Error:', err);
    }
}

myData();*/

const accessToken = 'USER TOKEN'

async function getData() {
    try{
        const header = new Headers ()
        header.set('authorization', `token: ${accessToken}`)
        header.set('login', 'matheus')
        const options = {
            headers: header
        }
        const response = await fetch('https://api.github.com/users/Matheus2Alves', options)
        if(!response.status === 200) {
            throw new Error('Failed to fetch user data')
        } else {
            const data = await response.json()
            const contentType = response.headers.get('content-type')
            for(const pairs of response.headers.entries()) {
                console.log(`${pairs[0]}: ${pairs[1]}`)
            }
            console.log(data)
            console.log(contentType)
        }
    } catch(error) {
        console.error('Error', error)
    }
}

getData()
