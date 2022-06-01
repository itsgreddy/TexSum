import Sawo from 'sawo'
import { useEffect } from 'react'

const SawoLogin = () => {

    useEffect(() => {

        console.log(process.env)

        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: 'login',
            // can be one of 'email' or 'phone_number_sms' or 'both_email_phone'
            identifierType: 'both_email_phone',
            // Add the API key copied from 5th step
            apiKey: '8c2f489d-c06b-4c32-b20c-bfaed9fa493d',
            // Add a callback here to handle the payload sent by sdk
            onSuccess: payload => {
                // you can use this payload for your purpose
            },
        }
        let sawo = new Sawo(config)
        sawo.showForm()
    }, [])

    return (
        <>
            <div id="login" style={{ height: "350px", width: "500px", zIndex: "10" }}></div>
        </>
    )
}

export default SawoLogin