const inputText = document.querySelector("#questioninput");
const aiButton = document.querySelector("#askbutton");
const outputText = document.querySelector("#answeroutput");

aiButton.onclick = async function (event) {
    const text = inputText.value;
    console.log("user typed: ", text);

    const url = "";                         //<- Put url Endpoint

    await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json', 
            'api-key': ''                           //<-Add Open AI API Key  (text generation):
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

    const url = "";         // <- Put the url Endpoint

    await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'api-key': ''                               //<-Add Open AI API Key (Image generation)
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