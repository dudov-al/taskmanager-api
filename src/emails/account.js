const sgMail = require("@sendgrid/mail");


sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

const sendWelcome = (email, name) => {
  sgMail.send({
    to: email,
    from: "dudov.al16@gmail.com",
    subject: "Welcome Email - Thanks for Joining",
    text: `Welcome ${name}, to the App. Let me know, how are you?`,
  });
};

const deleteEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: "dudov.al16@gmail.com",
        subject: "Welcome Email - Thanks for Joining",
        text: `Welcome ${name}, to the App. Let me know, how are you?`,
        html: `<h1>It's time to say goodbuy! Thanks for using my app</h1>`
    });
}

module.exports = {sendWelcome, deleteEmail}