const asynchandler =()=>{
(req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
}
}

export {asynchandler}


//2nd method


// const asynchandler =(fn)=> async (req,res,next)=>{
//     try {
//         await fn(req,res,next)
        
//     } catch (error) {
//         res.status(err.code||500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }