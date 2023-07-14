const cron = require('node-cron');

exports.updateReports = async (period) => {
    // Update reports 
    cron.schedule(period, function() {
        try {
            
        }catch(error){
            console.error('ERROR CRON: Error updating reports');
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