const fs = require('fs');

const inputFile = "datafile.csv";
const outputFile = "outputfile.csv";

function parseFile (indata, outdata, delimiter = ';') {
  //check if input file exists
  const doesInputExist = fs.existsSync(indata) ? 'input file exists':'Input file does not exist';
  console.log(doesInputExist);

  //check if output file exists
  if (fs.existsSync(outdata)) {
    fs.unlinkSync(outdata);
  }

  //proceed with input file handling
    if (fs.existsSync(indata)) {
      // Read and process the input file
      const data = fs.readFileSync(indata, "utf-8");
      const lines = data.split("\n");
}
      const processedData = lines.map(line => line.split(delimiter).join(','));
}
console.log(parseFile(inputFile, outputFile))



  



// Leave this code here for the automated tests
module.exports = {
  parseFile,
}