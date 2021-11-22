export interface User {
    
    tickets : a[],
    
}

export interface a{

    requester_id: number,
    assignee_id: number,
    subject: string,
    description : string,
    tags : string[],

}