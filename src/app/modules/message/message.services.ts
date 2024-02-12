import { message } from "./message.interface"
import { messageModal } from "./message.model"

const saveMessageInDb =async (messageData:message) => {
  const existingUser = await messageModal.findOne({ userEmail: messageData.userEmail })
    if (existingUser) {
      return 'user already exist'
    }
  
    const result = await messageModal.create(messageData)
    return result
}

const getSingleMessageDataInDb =async (email:string) => {
    const result = await messageModal.findOne({ userEmail: email }).sort({ "messages.timestamp": 1 });
    return result;
  }
const getSpecificMessageDataInDb =async (email:string) => {
    const result = await messageModal.findOne({ userEmail: email }).sort({ "messages.timestamp": 1 });
    return result;
  }

const updateSingleMessageDataInDb =async (userEmail:string, payload:message) => {
    const result = await messageModal.findOneAndUpdate(
        { userEmail: userEmail },
        { $push: { messages: payload } },
        { new: true }
    );
    return result;
  }
const GetAllMessageDataInDb =async () => {
    const result = await messageModal.find().select('userName photoUrls userEmail').sort({ "date": -1 })
    return result;
  }

export const messagesData = {
    saveMessageInDb,
    getSingleMessageDataInDb,
    updateSingleMessageDataInDb,
    GetAllMessageDataInDb,
    getSpecificMessageDataInDb
}