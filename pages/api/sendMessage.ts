import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== "POST") {
        return res.status(405).json({error: 'Method Not Allowed'});
    }

    const {senderName, senderEmail, senderMessage} = req.body;

    const webhookBody = {
        embeds: [{
            title: "Message Form Submitted",
            fields: [
                {name: "Sender Name", value: senderName},
                {name: "Sender Email", value: senderEmail},
                {name: "message", value: senderMessage}
            ]
        }]
    }

    try {
        const response = await fetch(process.env.DISCORD_KEY_WEBHOOK as string, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(webhookBody),
        });

        if(!response.ok) {
            return res.status(500).json({ error: 'Failed to send message to Discord' });
        }

        return res.status(200).json({success: true})
    } catch (err) {
        console.error("Server error:", err);
        return res.status(500).json({error: 'Internal Server Error'})
    }
}