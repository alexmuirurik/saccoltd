const getPrompt = (
    text: FormDataEntryValue | null,
    phoneNumber: FormDataEntryValue | null,
) => {
    let response = ''

    switch (text) {
        case '':
        case null:
        case undefined:
            response = `CON What would you like to check
            1. My accountsdsd
            2. My phone number
            3. Request Help`
            break

        case '1':
            response = `CON Choose account information you want to view
            1. Account number
            2. My Account Balance`
            break

        case '1*1':
            const accountNumber = 'ACC100101'
            // This is a terminal request. Note how we start the response with END
            response = `END Your account number is ${accountNumber}`
            break

        case '1*2':
            const accountBalance = 909094
            // This is a terminal request. Note how we start the response with END
            response = `END Your account balance is ${accountBalance.toLocaleString()} Ksh`
            break

        case '2':
            response = `END Your phone number is ${phoneNumber}`
            break

        case '3':
            response = `END Thanks for reaching out. 
            We'll call you back shortly!`
            break
        default:
            response = `END Sorry, Invalid Response!`
    }

    return response
}

export const POST = async (req: Request) => {
    const form = await req.formData()
    const sessionId = form.get('sessionId')
    const serviceCode = form.get('serviceCode')
    const phoneNumber = form.get('phoneNumber')
    const text = form.get('text')
    const promptResponse = getPrompt(text, phoneNumber)
    return new Response(promptResponse)
}
