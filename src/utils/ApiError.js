class ApiError extends Error {
    constructor(
        statusCode,
        message="something went wrong",
        error=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode,
        this.data=null,
        this.errors=message,
        this.success=false,
        this.errors=this.errors

        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}