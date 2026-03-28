export const sendToken = (res, message, user, statuscode = 200) => {
  const token = user.getJWTToken();
  const options = { 
    expires: new Date(Date.now()+15*24*60*60*1000),
    httpOnly: true,
    secure:false,
    sameSite:"none",
};
  res.status(statuscode).cookie("token", token, options).json({
    success: true,
    message,
    token,
    user,
  });
};
