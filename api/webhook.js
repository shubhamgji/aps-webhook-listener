export default async function handler(req, res) {
    if (req.method === 'POST') {
        let body = '';
        await new Promise((resolve) => {
            req.on('data', chunk => body += chunk);
            req.on('end', resolve);
        });

        const parsedBody = JSON.parse(body);
        console.log('Webhook received:', parsedBody);

        return res.status(200).json({
            message: 'Webhook received successfully',
            data: parsedBody
        });
    }

    if (req.method === 'GET') {
        const { challenge } = req.query;
        if (challenge) return res.status(200).send(challenge);
        return res.status(400).send('Missing challenge parameter');
    }

    res.status(405).json({ message: 'Method Not Allowed' });
}
