const NOTIFICATIONS = require('../models/Notification');


exports.getAllNotification = async (req, res) => {

    try {

        const notifications = await NOTIFICATIONS.find();
        console.log(notifications, '---------------noti-------------');

        if (notifications.length === 0) {
            return res.status(404).json({ error: 'No notification found' });
        }
        res.status(200).json({ message: 'Notification list', notifications });


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }


}