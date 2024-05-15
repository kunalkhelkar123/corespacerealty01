const otpVerification = async(optTime)=> {
    try {
        
        console.log("MilliSecond is:" +optTime );

        const currDate = new Date();
        let differanceValue = (optTime - currDate.getTime())/1000;
        differanceValue/=60;

        const minutes = Math.abs(differanceValue)   //// for no nigative value
        console.log("OTP Expire in:"+ minutes)

        if(minutes > 1){
            return true;
        }
        return false;
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = {otpVerification}