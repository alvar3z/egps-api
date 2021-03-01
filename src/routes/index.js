const { Router, request } = require('express');
const router = Router();
router.post('/topsecret/', (req, res) => {
    const request = req.body;
    let messages = [];
    let distances = [];
    request.satellites.map(sat => {
        messages.push(sat.message)
        distances.push(sat.distance)
    });
    let position = GetLocation(distances);
    let message = GetMessage(messages);
    let response = { 'position': position, 'message': message }
    res.json(response);
});

router.post('/topsecret_split/:satellite_name', (req, res) => {
    const satellite_name = req.params.satellite_name.toLocaleLowerCase();
    let _satellites = satellites.filter(x => x.name.toLocaleLowerCase() != satellite_name);
    let _satellite = satellites.find(x => x.name.toLocaleLowerCase() == satellite_name);
    const { distance, message } = req.body;
    _satellite.distance = distance;
    _satellite.message = message;
    _satellites = [..._satellites, _satellite]
    let messages = [];
    let distances = [];
    _satellites.map(sat => {
        messages.push(sat.message)
        distances.push(sat.distance)
    });
    let position = GetLocation(distances);
    let _message = GetMessage(messages);
    let response = { 'position': position, 'message': _message }
    res.json(response);
});

router.get('/topsecret_split/:satellite_name', (req, res) => {
    let messages = [];
    let distances = [];
    satellites.map(sat => {
        messages.push(sat.message)
        distances.push(sat.distance)
    });
    let position = GetLocation(distances);
    let _message = GetMessage(messages);
    let response = { 'position': position, 'message': _message }
    res.json(response);
});
module.exports = router;