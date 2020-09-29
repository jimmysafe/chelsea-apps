const sgMail = require('@sendgrid/mail');
import axios from 'axios'

export default async(req, res) => {
    if (req.method === 'POST') {
        const { name, email, company, message } = req.body.values
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        await axios.post('https://chelsea-apps.net/incoming', {
            name,
            email,
            message,
            company,
            team: "TG74ES6KW",
            key: process.env.SLACK_BOT_KEY
        })

        const msg = {
            to: email,
            from: {
                email: "harry@chelsea-apps.com",
                name: "Chelsea Apps"
            },
            subject: 'Thank You for Contacting Us',
            html: `
                <p>Hey ${name},</p> 
                <p>Thanks for reaching out. We need to find out a little more about your project and business, would it be possible to fill out <a href="https://form.jotform.com/200283683523352" target="_blank">this short form?</a> This allows us to get back to you in a better way.</p> 
                <p>Thanks,</p>
                <p>Harry</p>`,
        };

        sgMail.send(msg)
        .then(response => res.status(200).json({ success: true, msg:'Message Sent! We will get back in touch asap!', response }))
        .catch(err => {
            console.log(err)
            res.status(500).json({ success: false, msg: 'Oops! Something went wrong', err })
        })

      }
  }
  