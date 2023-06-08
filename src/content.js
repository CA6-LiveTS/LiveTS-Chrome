let intervalId = null;
let video = null;
let timestampElement = null;

let outputTexts = [];

let script = document.createElement('script');
script.textContent = `
    window.activity = "Start";
`;
document.documentElement.appendChild(script);
script.remove();

let observer = new MutationObserver(function() {
    video = document.querySelector('video');
    let titleElement = document.querySelector('#scroll-container.yt-chip-cloud-renderer');
    let outputTimestamp = "";

    if (video && titleElement) {

        textElement = document.createElement('span');
        textElement.style.fontSize = '18px';
        textElement.style.marginRight = '10px';
        textElement.style.color = '#1e90ff';
        textElement.textContent = `CA6 LiveTS`;

        timestampElement = document.createElement('span');
        timestampElement.style.fontSize = '18px';
        timestampElement.style.marginRight = '10px';
        timestampElement.style.color = '#1e90ff';
        timestampElement.textContent = `${formatTime(video.currentTime)}`;

        let inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.style.fontSize = '18px';
        inputElement.style.padding = '5px';

        let outputElement = document.createElement('input');
        outputElement.type = 'text';
        outputElement.style.fontSize = '18px';
        outputElement.style.padding = '5px';
        outputElement.readOnly = true;

        let buttonMark0Element = document.createElement('button');
        buttonMark0Element.textContent = '-00';
        buttonMark0Element.style.fontSize = '18px';
        buttonMark0Element.style.fontWeight = 'bold';
        buttonMark0Element.style.padding = '5px 10px';
        buttonMark0Element.style.backgroundColor = '#4cadf7';
        buttonMark0Element.style.color = '#fff';
        buttonMark0Element.style.border = 'none';
        buttonMark0Element.style.borderRadius = '5px';
        buttonMark0Element.style.cursor = 'pointer';
        buttonMark0Element.addEventListener('click', function() {
            outputTimestamp = `${formatTime(video.currentTime)}`;
        
            console.log(outputTimestamp);
            outputElement.value = outputTimestamp;
        });

        let buttonMark5Element = document.createElement('button');
        buttonMark5Element.textContent = '-05';
        buttonMark5Element.style.fontSize = '18px';
        buttonMark5Element.style.fontWeight = 'bold';
        buttonMark5Element.style.padding = '5px 10px';
        buttonMark5Element.style.backgroundColor = '#4cadf7';
        buttonMark5Element.style.color = '#fff';
        buttonMark5Element.style.border = 'none';
        buttonMark5Element.style.borderRadius = '5px';
        buttonMark5Element.style.cursor = 'pointer';
        buttonMark5Element.addEventListener('click', function() {
            if(video.currentTime > 5){
                outputTimestamp = `${formatTime(video.currentTime-5)}`;
            } else {
                outputTimestamp = `${formatTime(0)}`;
            }
        
            console.log(outputTimestamp);
            outputElement.value = outputTimestamp;
        });

        let buttonMark10Element = document.createElement('button');
        buttonMark10Element.textContent = '-10';
        buttonMark10Element.style.fontSize = '18px';
        buttonMark10Element.style.fontWeight = 'bold';
        buttonMark10Element.style.padding = '5px 10px';
        buttonMark10Element.style.backgroundColor = '#4cadf7';
        buttonMark10Element.style.color = '#fff';
        buttonMark10Element.style.border = 'none';
        buttonMark10Element.style.borderRadius = '5px';
        buttonMark10Element.style.cursor = 'pointer';
        buttonMark10Element.addEventListener('click', function() {
            if(video.currentTime > 10){
                outputTimestamp = `${formatTime(video.currentTime-10)}`;
            } else {
                outputTimestamp = `${formatTime(0)}`;
            }
        
            console.log(outputTimestamp);
            outputElement.value = outputTimestamp;
        });

        let buttonMark15Element = document.createElement('button');
        buttonMark15Element.textContent = '-15';
        buttonMark15Element.style.fontSize = '18px';
        buttonMark15Element.style.fontWeight = 'bold';
        buttonMark15Element.style.padding = '5px 10px';
        buttonMark15Element.style.backgroundColor = '#4cadf7';
        buttonMark15Element.style.color = '#fff';
        buttonMark15Element.style.border = 'none';
        buttonMark15Element.style.borderRadius = '5px';
        buttonMark15Element.style.cursor = 'pointer';
        buttonMark15Element.addEventListener('click', function() {
            if(video.currentTime > 15){
                outputTimestamp = `${formatTime(video.currentTime-15)}`;
            } else {
                outputTimestamp = `${formatTime(0)}`;
            }
        
            console.log(outputTimestamp);
            outputElement.value = outputTimestamp;
        });

        let buttonMark20Element = document.createElement('button');
        buttonMark20Element.textContent = '-20';
        buttonMark20Element.style.fontSize = '18px';
        buttonMark20Element.style.fontWeight = 'bold';
        buttonMark20Element.style.padding = '5px 10px';
        buttonMark20Element.style.backgroundColor = '#4cadf7';
        buttonMark20Element.style.color = '#fff';
        buttonMark20Element.style.border = 'none';
        buttonMark20Element.style.borderRadius = '5px';
        buttonMark20Element.style.cursor = 'pointer';
        buttonMark20Element.addEventListener('click', function() {
            if(video.currentTime > 20){
                outputTimestamp = `${formatTime(video.currentTime-20)}`;
            } else {
                outputTimestamp = `${formatTime(0)}`;
            }
        
            console.log(outputTimestamp);
            outputElement.value = outputTimestamp;
        });

        let buttonMark30Element = document.createElement('button');
        buttonMark30Element.textContent = '-30';
        buttonMark30Element.style.fontSize = '18px';
        buttonMark30Element.style.fontWeight = 'bold';
        buttonMark30Element.style.padding = '5px 10px';
        buttonMark30Element.style.backgroundColor = '#4cadf7';
        buttonMark30Element.style.color = '#fff';
        buttonMark30Element.style.border = 'none';
        buttonMark30Element.style.borderRadius = '5px';
        buttonMark30Element.style.cursor = 'pointer';
        buttonMark30Element.addEventListener('click', function() {
            if(video.currentTime > 30){
                outputTimestamp = `${formatTime(video.currentTime-30)}`;
            } else {
                outputTimestamp = `${formatTime(0)}`;
            }
        
            console.log(outputTimestamp);
            outputElement.value = outputTimestamp;
        });

        let buttonMarkNElement = document.createElement('button');
        buttonMarkNElement.textContent = 'Null';
        buttonMarkNElement.style.fontSize = '18px';
        buttonMarkNElement.style.fontWeight = 'bold';
        buttonMarkNElement.style.padding = '5px 10px';
        buttonMarkNElement.style.backgroundColor = '#4cadf7';
        buttonMarkNElement.style.color = '#fff';
        buttonMarkNElement.style.border = 'none';
        buttonMarkNElement.style.borderRadius = '5px';
        buttonMarkNElement.style.cursor = 'pointer';
        buttonMarkNElement.addEventListener('click', function() {
            outputTimestamp = `${formatTime(0)}`;
        
            console.log(outputTimestamp);
            outputElement.value = outputTimestamp;
        });

        let buttonElement = document.createElement('button');
        buttonElement.textContent = 'LiveTS';
        buttonElement.style.fontSize = '18px';
        buttonElement.style.fontWeight = 'bold';
        buttonElement.style.padding = '5px 10px';
        buttonElement.style.backgroundColor = '#66d672';
        buttonElement.style.color = '#fff';
        buttonElement.style.border = 'none';
        buttonElement.style.borderRadius = '5px';
        buttonElement.style.cursor = 'pointer';
        buttonElement.addEventListener('click', function() {
            let outputText = "";
            if(activitySelect.value == "" || inputElement.value == ""){
                outputText = `${outputTimestamp} ${activitySelect.value}${inputElement.value}`;
            } else {
                outputText = `${outputTimestamp} ${activitySelect.value} ~ ${inputElement.value}`;
            }
        
            // If this is the first output text, add the title of the page to outputTexts
            if (outputTexts.length === 0) {
                
                let now = new Date();
                let atitle = now.toISOString().slice(0,10) + " ~ " + document.title;

                outputTexts.push(atitle);
                outputTexts.push("URL: " + window.location.href);
                outputTexts.push("LiveTs:");
            }
        
            outputTexts.push(outputText);  // Add the new output text to the list
        
            console.log(outputText);
            outputElement.value = outputText;
        });

        let activitySelect = document.createElement('select');
        activitySelect.style.fontSize = '18px';
        activitySelect.style.padding = '5px';

        let options = ["", "Start", "Loading", "Zatsudan", "Gaming", "Karaoke", "Ending", "End", "Break", "Misc", "@TS", "@LiveTS"];

        options.forEach(function(optionText) {
            let optionElement = document.createElement('option');
            optionElement.textContent = optionText;
            optionElement.value = optionText;

            activitySelect.appendChild(optionElement);
        });

        activitySelect.addEventListener('change', function() {
            window.activity = this.value;
        });
        
        let copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.style.fontSize = '18px';
        copyButton.style.fontWeight = 'bold';
        copyButton.style.padding = '5px 10px';
        copyButton.addEventListener('click', function() {
            // Join the output texts into a single string with line breaks between them
            let outputText = outputTexts.join('\n');
        
            // Copy outputText to clipboard
            navigator.clipboard.writeText(outputText).then(function() {
                console.log('Copying to clipboard was successful!');
            }, function(err) {
                console.error('Could not copy text: ', err);
            });
        });
        
        let downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download';
        downloadButton.style.fontSize = '18px';
        downloadButton.style.fontWeight = 'bold';
        downloadButton.style.padding = '5px 10px';
        downloadButton.addEventListener('click', function() {
            let outputFile = `${document.title}.livets.txt`;

            // Join the output texts into a single string with line breaks between them
            let outputText = outputTexts.join('\n');

            // Create a Blob with the outputText
            let blob = new Blob([outputText], {type: 'text/plain'});

            // Create a URL to the Blob
            let url = URL.createObjectURL(blob);

            // Create a link element, set its href to the Blob URL, and click it to start the download
            let link = document.createElement('a');
            link.href = url;
            link.download = outputFile;
            link.click();
        });

        let clearButton = document.createElement('button');
        clearButton.textContent = 'Clear Input';
        clearButton.style.fontSize = '18px';
        clearButton.style.fontWeight = 'bold';
        clearButton.style.padding = '5px 10px';
        clearButton.addEventListener('click', function() {
            inputElement.value = '';
        });

        let eraseButton = document.createElement('button');
        eraseButton.textContent = 'Delete All TS';
        eraseButton.style.fontSize = '18px';
        eraseButton.style.fontWeight = 'bold';
        eraseButton.style.padding = '5px 10px';
        eraseButton.style.backgroundColor = 'red';
        eraseButton.addEventListener('click', function() {
            // Clear the list of output texts
            outputTexts = [];
        });

        let firstRow = document.createElement('div');
        let secondRow = document.createElement('div');
        let thirdRow = document.createElement('div');
        let fourthRow = document.createElement('div');
        let fifthRow = document.createElement('div');
        let sixthhRow = document.createElement('div');
        let seventhRow = document.createElement('div');
        
        firstRow.appendChild(textElement);
        firstRow.appendChild(timestampElement);

        thirdRow.appendChild(activitySelect);
        thirdRow.appendChild(inputElement);

        fourthRow.appendChild(buttonMark0Element);
        fourthRow.appendChild(buttonMark5Element);
        fourthRow.appendChild(buttonMark10Element);
        fourthRow.appendChild(buttonMark15Element);
        fourthRow.appendChild(buttonMark20Element);
        fourthRow.appendChild(buttonMark30Element);
        fourthRow.appendChild(buttonMarkNElement);
        
        fifthRow.appendChild(outputElement);
        fifthRow.appendChild(buttonElement);

        sixthhRow.appendChild(downloadButton);
        sixthhRow.appendChild(copyButton);
        sixthhRow.appendChild(clearButton);

        seventhRow.appendChild(eraseButton);

        titleElement.appendChild(firstRow);
        titleElement.appendChild(secondRow);
        titleElement.appendChild(thirdRow);
        titleElement.appendChild(fourthRow);
        titleElement.appendChild(fifthRow);
        titleElement.appendChild(sixthhRow);
        titleElement.appendChild(seventhRow);

        titleElement.style.display = 'flex';
        titleElement.style.alignItems = 'center';
        titleElement.style.flexWrap = 'wrap';

        intervalId = setInterval(function() {
            timestampElement.textContent = `${formatTime(video.currentTime)}`;
        }, 250);

        observer.disconnect();
    }
});

observer.observe(document, {childList: true, subtree: true});

function formatTime(timeInSeconds) {
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
    let seconds = Math.floor(timeInSeconds - (hours * 3600) - (minutes * 60));

    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}
