const inputText = document.querySelector("#questioninput");
const aiButton = document.querySelector("#askbutton");
const outputText = document.querySelector("#answeroutput");

aiButton.onclick = async function (event) {
    const text = inputText.value;
    console.log("user typed: ", text);

    const url = "https://gaic23-openai.openai.azure.com/openai/deployments/gpt-35-turbo/chat/completions?api-version=2024-02-15-preview";

    await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'api-key': '442e593e0f4a4f0888523084c6ed91d4'
        },
        body: JSON.stringify(
            {
                "temperature": 0.7,
                "max_tokens": 800,
                "messages": [
                    {
                        'role': "system",
                        'content': "You are an AI assistant that help people find information."
                    },
                    {
                        'role': "user",
                        'content': text
                    }
                ]
            }
        )
    })
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        outputText.value = data.choices[0].message.content;
        console.log("OpenAI response: ", data);
    });
};


/*-----------------------------------------------------------
|                          Image IA                         |
-------------------------------------------------------------
*/

const imginput = document.querySelector("#imageinput");
const askImageButton = document.querySelector("#askImageButton");
const imageoutput = document.querySelector("#imageoutput");


askImageButton.onclick = async function (event) {
    const text = imginput.value;
    console.log("user typed: ", text);

    const url = "https://gaib2024-oai.openai.azure.com/openai/deployments/Dalle3/images/generations?api-version=2024-02-01";

    await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'api-key': 'fb1de2970b384874b9761e8445348270'
        },
        body: JSON.stringify(
            {
                "prompt": text,
                "size": "1024x1024",
                "n": 1,
                "quality": "hd",
                "style": "vivid"
            }
        )
    })
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        imageoutput.src = data.data[0].url;
        console.log("OpenAI response: ", data);
    });
};