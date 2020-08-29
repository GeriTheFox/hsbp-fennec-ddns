const publicIp = require('public-ip');
const { get } = require('request');
require('dotenv').config();
const cron = require("node-cron");
const request = require('request')

var old_ipv4 = '';
var new_ipv4 = '';


cron.schedule("* * * * *", async function() {
        new_ipv4 = await publicIp.v4();
});

cron.schedule("*/2 * * * *", function() {
    if(old_ipv4 != new_ipv4){
        old_ipv4 = new_ipv4;
        api(new_ipv4);
    }
    else{
        console.log("IP NOT chanegd: "+old_ipv4);
    }
});

function api(ip){
    //ping the feenec api here
    console.log("IP changed: "+ip);
}