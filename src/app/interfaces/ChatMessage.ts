
export interface ChatMessage {
    msg_text : string;
    //msg_sender : string; // then change for a User type
    msg_date ?: Date;
    fromYou : boolean //delte after
}