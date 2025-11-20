// api/webhook.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Log the webhook payload to Vercel logs
        console.log('Webhook received:', req.body);

        // Respond back to APS
        res.status(200).json({
            message: 'Webhook received successfully',
            data: req.body
        });
    } else {
        // Handle non-POST requests
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
