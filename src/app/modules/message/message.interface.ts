export type message  = {
    messageId:string,
    userName : string,
    userEmail:string,
    date:Date,
    photoUrls:string,
    messages: Array<{
        sender: string; 
        content: string;
        timestamp: Date;
    }>;
   }