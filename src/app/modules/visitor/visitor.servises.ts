import { GetTodaysDateInterfaceProps } from "../../GlobalInterface/dateInterface";
import { Visit } from "./visitor.model"

const createVisitorInDb =async (ip:string,today:string) => {
    const visitCount = await Visit.countDocuments({ ip: ip, date: { $gte: today } });
        
        if (visitCount === 0) {
            
            const newVisit = new Visit({ ip: ip });
            await newVisit.save();
            
            // Render the page for the user
         return 'Welcome to the specific page!'
    
}else{
    return 'you are already visited'
}

}

const getVisitorsFromDB = async () => {
    const result = await Visit.find();
    return result;
};
const getTodaysVisitorsFromDB = async ({ today }: GetTodaysDateInterfaceProps) => {
    const result = await Visit.find({ date: { $gte: today } });
    return result;
};

export  const  visitorServices = {
    createVisitorInDb,
    getVisitorsFromDB,
    getTodaysVisitorsFromDB
}