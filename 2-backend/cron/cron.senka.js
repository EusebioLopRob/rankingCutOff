const cron = require('node-cron');

exports.requestData = async (period) => {
    // Request data from senka.su
    cron.schedule(period, function() {
        try {
            
        }catch(error){
            console.error('ERROR CRON: Error getting data from senka.su');
            console.error(error);
        }

    });
}

  /*
  
  These asterisks are part of the crontab syntax to represent different units of time:

  * * * * * *
  | | | | | |
  | | | | | day of week
  | | | | month
  | | | day of month
  | | hour
  | minute
  second ( optional )

  */