export type message  = {
    messageId:string,
    userName : string,
    userEmail:string,
    date:string,
    photoUrl:string,
    messages: Array<{
        sender: string; // 'user' or 'admin'
        content: string;
        timestamp: Date;
    }>;
   }