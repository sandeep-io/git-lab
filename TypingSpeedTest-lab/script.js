let startTime;

function startTest() {
    document.getElementById("inputText").value = "";
    startTime = new Date().getTime();

    document.getElementById("result").innerHTML =
        "Typing test started...";
}

function endTest() {
    const endTime = new Date().getTime();

    const typedText =
        document.getElementById("inputText").value.trim();

    const timeTaken =
        (endTime - startTime) / 1000;

    const words =
        typedText.split(" ").filter(word => word !== "");

    const wordCount = words.length;

    const wpm =
        Math.round((wordCount / timeTaken) * 60);

    document.getElementById("result").innerHTML =
        `Words Typed: ${wordCount}<br>
         Time Taken: ${timeTaken.toFixed(2)} seconds<br>
         WPM: ${wpm}`;
}