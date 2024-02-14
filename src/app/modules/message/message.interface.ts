export type message  = {
    messageId:string,
    userName : string,
    userEmail:string,
    date:Date,
    category:string,
    subCategory:string,
    photoUrls:string,
    messages: Array<{
        sender: string; 
        content: string;
        timestamp: Date;
    }>;
   }