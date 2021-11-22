import * as request from 'request';

class APiService{

    getticketinfo( userName : string) {

        request.get('https://zccsragviletstry.zendesk.com/api/v2/tickets.json',null ,(response : any) => {
            console.log(response);

        });
        
    }

}