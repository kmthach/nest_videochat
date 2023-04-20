import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "http";

@WebSocketGateway(80, { cors: true })
export class VideoChatGateway {
    @WebSocketServer()
    server: Server

    @SubscribeMessage('join-room')
    handleEvent(@MessageBody() data: string) {
        this.server.emit('user-connected', data)
    }

}