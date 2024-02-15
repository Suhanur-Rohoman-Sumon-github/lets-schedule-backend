import { Router } from "express";
import { PaymentRouter } from "../modules/payments/payment.route";
import { UserRouter } from "../modules/user/user.route";
import { EventRouter } from "../modules/schedule/schedule.route";
import { EmailRote } from "../modules/mail/mail.route";
import { messageRoute } from "../modules/message/message.route";
import { VisitorRouter } from "../modules/visitor/visitor.route";

const router = Router()

const moduleRoute = [
    {
        path:"/users",
        route:UserRouter
    },
    {
        path:"/events",
        route:EventRouter
    },
    {
        path:"/payments",
        route:PaymentRouter
    },
    {
        path:"/mail",
        route:EmailRote
    },
    {
        path:"/message",
        route:messageRoute
    },
    {
        path:"/visitor",
        route:VisitorRouter
    }
]

moduleRoute.forEach(routes=>router.use(routes.path,routes.route))


export default router