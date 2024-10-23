const fs = require('fs');

const inputFile = './datafile.csv';
const outputFile = './outputfile.csv';

function processInput(datasheet, delimiter = ';'){
  
  const lines = fs.readFileSync(datasheet, 'utf-8').split(/\n/);
  const orderedLines = [];

  for (const line of lines) {

    const fields = line.split(delimiter);

    const reversearray = fields.reverse();

    const joinback = reversearray.join(delimiter);

    orderedLines.push(joinback);
  }
  return orderedLines;
}

function cleanInput(orderedLines){
  const cleanedLines = [];

  for (let i=1; i < orderedLines.length; i++){
    const line = orderedLines[i];

    const trimmedLine = line.length > 20 ? line.slice(0,20) : line;

    cleanedLines.push(trimmedLine)
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

fs.writeFileSync(outdata, processedData.join('\n'));
return processedData.length;
}
parseFile(inputFile, outputFile) 
// Example usage (for testing purposes)
//const processedData = processInput(inputFile);
//const cleanedData = cleanInput(processedData);
//console.log(cleanedData); // See the cleaned output


// Leave this code here for the automated tests
module.exports = {
  parseFile,
};



  



// Leave this code here for the automated tests
module.exports = {
  parseFile,
}