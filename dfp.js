const fs = require('fs');

const inputFile = './test.csv';
const outputFile = './outputfile.csv';

function processInput(datasheet, delimiter = ';') {
  const lines = fs.readFileSync(datasheet, 'utf-8').split(/\n/);
  const orderedLines = [];

  for (const line of lines) {
    const fields = line.split(delimiter);

    const reverseArray = fields.reverse();
    const joinedLine = reverseArray.join(delimiter);
    orderedLines.push(joinedLine);
  }
  return orderedLines;
}

function cleanInput(orderedLines) {
  const cleanedLines = [];

  for (let i = 1; i < orderedLines.length; i++) { // Start at 1 to skip the header
    const line = orderedLines[i];
    //console.log(line)
    
    // Split the line again to separate review from sentiment
    const fields = line.split(';');
  

    if (fields.length > 1) {
      const review = fields[0].trim(); // The first field is the review
      const sentiment = fields[1].trim(); // The second field is the sentiment

      // Trim the review to 20 characters
      const trimmedSentiment = sentiment.length > 20 ? sentiment.slice(0, 20) : sentiment;

      // Push the trimmed review and the sentiment back together
      cleanedLines.push(review + ';' + trimmedSentiment);
    }
  }
  return cleanedLines;
}

function parseFile(indata, outdata, delimiter = ';') {
  if (!fs.existsSync(indata)) {
    return -1;
  }
  if (fs.existsSync(outdata)) {
    fs.unlinkSync(outdata);
    console.log("Output file existed and was deleted.");
  }
  const processedLines = processInput(indata, delimiter);
  const processedData = cleanInput(processedLines);
  fs.writeFileSync(outdata, processedData.join('\n'), 'utf-8');
  return processedData.length;
}

// Example usage
parseFile(inputFile, outputFile); 







// Leave this code here for the automated tests
module.exports = {
  parseFile,
};
