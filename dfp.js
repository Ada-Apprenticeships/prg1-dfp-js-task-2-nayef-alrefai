const fs = require('fs');

const inputFile = "./datafile.csv";
const outputFile = "./outputfile.csv";

// process the input data
function processData(data, delimiter = ';') {
  const lines = data.split(/\n/);
  const processedLines = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const fields = line.split(delimiter);

    if (fields.length === 2) {
      
      const review = fields[0].trim().substring(0, 20); 
      const reviewType = fields[1].trim(); 

      processedLines.push(`${reviewType},${review}`);
    }
  }
  return processedLines;
}

// Check if input file exists
function parseFile(indata, outdata, delimiter = ';') {
  if (!fs.existsSync(indata)) {
    console.log("-1");
    return; 
  }
  // Check if output file exists and delete it if it does
  if (fs.existsSync(outdata)) {
    fs.unlinkSync(outdata);
    console.log("Output file existed and was deleted.");
  }
  // Read the input file
  const data = fs.readFileSync(indata, "utf-8", );

  // Process the data using the separate function
  const processedData = processData(data, delimiter);

  // Write processed data to the output file
  fs.writeFileSync(outdata, processedData.join("\n"));
  console.log("Data processed and written to output file.");
}

// Example usage
parseFile(inputFile, outputFile) 



  



// Leave this code here for the automated tests
module.exports = {
  parseFile,
}