export default async function handler(req, res) {
  if (req.method === 'GET') {
    const VERIFY_TOKEN = "123456"; // change if needed
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    } else {
      return res.status(403).send('Forbidden');
    }
  }

  if (req.method === 'POST') {
    console.log('Webhook received:', req.body);
    return res.status(200).json({ status: 'received' });
  }

  res.status(405).send('Method Not Allowed');
}
