const express = require("express");
require('dotenv').config()
const router = express.Router()
const Snoowrap = require("snoowrap");

const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const redditPassword = process.env.REDDIT_PASSWORD

  const reddit = new Snoowrap({
    userAgent: 'test-bot-amitay',
    clientId: clientID,
    clientSecret: clientSecret,
    username: 'Amitay1599',
    password: redditPassword,
  });

  const subReddit = 'TestbotForLan'
  
router.post('/newproperty', async (req,res) => { 
    try {
        const { propertyName } = req.body  
        const { stockPrice } = req.body  
        const post = await reddit.getSubreddit(subReddit).submitSelfpost({
            title: `New property! "${propertyName}" is now live.`,
            text: `Shares of ${propertyName} are now available for ${stockPrice}`,
        });
        
        res.status(200).json({'Success': post});
    } catch(err) { 
        res.status(400).send(err.message);
    }
    })

module.exports = router;