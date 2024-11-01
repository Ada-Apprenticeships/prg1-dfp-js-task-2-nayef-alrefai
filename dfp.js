const fs = require('fs');

function parseFile(indata, outdata, delimiter = ';') {
  // Check if input file exists
  if (!fs.existsSync(indata)) {
    return -1;
  }

  // Delete any existing output file
  if (fs.existsSync(outdata)) {
    fs.unlinkSync(outdata);
  }

  // Read and process input data 
  const data = fs.readFileSync(indata, "utf-8");
  const lines = data.split('\n').slice(1); // Skip header line and split the data into an array of lines
  let totalReviews = 0;

  // Process each line 
  for (const line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine) { // Skip if the line is empty
      const splitLine = trimmedLine.split(delimiter);  // Split line by delimiter to separate fields

      const review = splitLine[0].trim(); //extract the review and remove whitespaces
      const sentiment = splitLine[1].trim(); // extract the sentiment and remove whitespaces

      // Limit review to 20 characters and format output
      const outputLine = `${sentiment}${delimiter}${review.substring(0, 20)}\n`;

      // Write each processed line to the output file
      fs.appendFileSync(outdata, outputLine);
      totalReviews++;
    }
  }

  return totalReviews;
}

const inputFile = "datafile.csv";
const outputFile = "outputFile.csv";
console.log(parseFile(inputFile, outputFile));

// Export for automated tests
module.exports = { parseFile };
