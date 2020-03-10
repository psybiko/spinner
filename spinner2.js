const spinner = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  '];

const delay = 200;
let delaySum = 100;

for (const line of spinner) {
  setTimeout(() => {
    process.stdout.write(line);
  }, delaySum)
  delaySum += delay;
};
 

