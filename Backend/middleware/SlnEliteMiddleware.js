const getslneliteRecords = require('../controller/SlnEliteController.js');

const SlnEliteList = async (req,res)=>{
    try{
        const url = process.env.SLN_BASE_URL;
        const headers = {
        'Authorization': process.env.SLN_API_KEY,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        };
        const sheetId = process.env.SLN_SHEET_ID;
        // Get criteria from request query parameters
        const criteria = req.query.criteria || '';
        
        const slnEliteRecords = await getslneliteRecords(url, headers, sheetId,criteria);
        res.send({data:slnEliteRecords})
    }
    catch(err){
        console.error('Error in fetching data:', err.message);
        res.status(500).send('Internal Server Error');
    }
};

module.exports =SlnEliteList;