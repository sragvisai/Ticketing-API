const username = process.env.user;
const password = process.env.password;

const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
const authorization = `Basic ${encodedBase64Token}`;

function server_work(req,response){
    const fetchers = fetch("https://zccsragviletstry.zendesk.com/api/v2/tickets.json", {
        headers: {
            Authorization: authorization
        },
    })
        .then((res) => res.json())
        .then((res) => {
            const fetchdata = res;
            response.send(fetchdata.tickets);
        });
}

module.exports = server_work;