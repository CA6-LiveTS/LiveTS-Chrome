# LiveTS-Chrome
Chrome extension for creating LiveTS files

## How to get the code from github
- follow the link to the repo (well you are here already)
- download the code using the green "Code" button, then click on "Download ZIP"
- extract the download zip

## How to install on chrome
- open chrome://extensions/ (remplace chrome with edge, opera, vivaldi if using one of those)
- enable developer mode
- load unpacked
- load the extension from the src folder in the folder downloaded from github

## How to use LiveTS
- open a youtube stream page
- click on the LiveTS icon above chat

###

### Playback Control
This part allow to Play/Pause and move backward/forward in the video
- || Play/Payse
- -30,-15,-05: move backward in the video by x time
- +30,+15,+05: move forward in the video by x time

### Activity
This part is used to set the text that will be displayed beside the timestamp
- Activity Type: select a type of activity or leave blank
- Input Text Field: Write the text wanted beside the time

### Timestamp Control
Set and offset the timestamp
- SET: set the timestamp time
- -30,-15,-05: move the imestamp time backward by x time
- +30,+15,+05: move the imestamp time forward by x time

### Timestamp Line
Show the curent Timestamp data and Button to write the timestamp to the file (also copy it to clipboard)
- Output Text Field: Display the last timestamp or time of curent timestamp
- TS Button: Write the timestamp to the Output Text Field, LiveTS file and copy it to the clipboard

### LiveTS File Control
- Del: Delete LiveTS file
- ST: Copy LiveTS file header to clipboard
- DL: Download LiveTS file
- CPY: Copy LiveTS file to clipboard
- CLR: Clear Activity Input Text Field