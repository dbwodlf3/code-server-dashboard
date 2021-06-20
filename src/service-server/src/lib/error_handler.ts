import { ControlResult, DBError } from "./interface";

export function defaultErrorHandler (err: DBError, responseMsg: ControlResult){
    responseMsg.fail = true;

    if(err.errno == 45028) {
        responseMsg.msg = '데이터 서버와의 연결이 좋지 않습니다.'
    }
    else if(err.errno == 1045) {
        responseMsg.msg = 'DB 서버와 연결할 수 없습니다.'
    }
    else {
        responseMsg.msg = '서버 오류로 인해서 정보를 받을 수 없습니다.'
    }
}
